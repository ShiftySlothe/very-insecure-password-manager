"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKeyPair = exports.createSecretPassword = exports.createPBKDF2Key = exports.createSalt = exports.hashPassword = exports.preprocessNewPassword = exports.createKey = exports.XORKeys = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = require("crypto");
const util_1 = __importDefault(require("util"));
const pbkdf2Promise = util_1.default.promisify(crypto_1.pbkdf2);
const generateKeyPairPromise = util_1.default.promisify(crypto_1.generateKeyPair);
const KEY_LENGTH = 64;
// export function generateKeyPairs(passphrase: Buffer) {
//   generateKeyPairs
// }
function XORKeys(passwordKey, secretKey) {
    if (passwordKey.length !== secretKey.length)
        throw new Error("Key must be of the same length");
    const buffer = Buffer.alloc(passwordKey.length);
    for (let i = 0; i < passwordKey.length; i++) {
        buffer[i] = passwordKey[i] ^ secretKey[i];
    }
    return buffer;
}
exports.XORKeys = XORKeys;
function createKey(password, opts) {
    return __awaiter(this, void 0, void 0, function* () {
        password = preprocessNewPassword(password);
        const hash = yield hashPassword(password, opts.passwordHashRounds);
        const salt = yield createSalt(opts.saltSize);
        const key = createPBKDF2Key(hash, salt, opts.keyGenIterations, KEY_LENGTH);
        return key;
    });
}
exports.createKey = createKey;
function preprocessNewPassword(password) {
    password = password.trim();
    password = password.normalize();
    checkPasswordMeetsRequirements(password);
    return password;
}
exports.preprocessNewPassword = preprocessNewPassword;
function hashPassword(password, rounds) {
    return __awaiter(this, void 0, void 0, function* () {
        // deepcode ignore HardcodedSecret: <Salt not secret>
        const hash = yield bcrypt_1.default.hash(password, rounds);
        return hash;
    });
}
exports.hashPassword = hashPassword;
function createSalt(size) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, crypto_1.randomBytes)(size);
    });
}
exports.createSalt = createSalt;
function createPBKDF2Key(password, salt, iterations, length) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = yield pbkdf2Promise(password, salt, iterations, length, "sha256");
        return key;
    });
}
exports.createPBKDF2Key = createPBKDF2Key;
function createSecretPassword() {
    return (0, crypto_1.randomUUID)({ disableEntropyCache: true });
}
exports.createSecretPassword = createSecretPassword;
function checkPasswordMeetsRequirements(password) {
    // Password schema is
    // Must contain letters, numbers, uppercase, lowercase, symbol
    // Must be 8 digits long
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8,}$/;
    const whiteSpaceRegex = /^\S+$/;
    if (!password.match(passwordRegex) || !password.match(whiteSpaceRegex))
        throw new Error(`Password: ${password} does not meet RegEx`);
}
function createKeyPair(passphrase) {
    return __awaiter(this, void 0, void 0, function* () {
        const keyPair = yield generateKeyPairPromise("ec", {
            namedCurve: "sect571k1",
            publicKeyEncoding: {
                type: "spki",
                format: "pem",
            },
            privateKeyEncoding: {
                type: "pkcs8",
                format: "pem",
                cipher: "aes-256-cbc",
                passphrase: passphrase.toString(),
            },
        });
        return keyPair;
    });
}
exports.createKeyPair = createKeyPair;
//# sourceMappingURL=createKey.js.map
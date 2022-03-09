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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateUserKey = void 0;
const createKey_1 = require("./createKey");
class GenerateUserKey {
    constructor(password, passwordKeyOptions, secretKeyOptions) {
        this.password = password;
        this.passwordKeyOptions = passwordKeyOptions;
        this.secretKeyOptions = secretKeyOptions;
    }
    createSecret() {
        this.secret = (0, createKey_1.createSecretPassword)();
    }
    createPasswordKey() {
        return __awaiter(this, void 0, void 0, function* () {
            this.passwordKey = yield (0, createKey_1.createKey)(this.password, this.passwordKeyOptions);
        });
    }
    createSecretKey() {
        return __awaiter(this, void 0, void 0, function* () {
            this.secretKey = yield (0, createKey_1.createKey)(this.secret, this.secretKeyOptions);
        });
    }
    createAccountUnlockKey() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createPasswordKey();
            this.createSecret();
            yield this.createSecretKey();
            this.accountUnlockKey = (0, createKey_1.XORKeys)(this.passwordKey, this.secretKey);
        });
    }
    generateKeyPair() {
        return __awaiter(this, void 0, void 0, function* () {
            const { privateKey, publicKey } = yield (0, createKey_1.createKeyPair)(this.accountUnlockKey);
            this.privateKey = privateKey;
            this.publicKey = publicKey;
        });
    }
    createUserKeys() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createAccountUnlockKey();
            yield this.generateKeyPair();
            const userKeyInfo = {
                publicKey: this.publicKey,
                privateKey: this.privateKey,
                accountUnlockKey: this.accountUnlockKey,
            };
            return userKeyInfo;
        });
    }
}
exports.GenerateUserKey = GenerateUserKey;
//# sourceMappingURL=userKey.js.map
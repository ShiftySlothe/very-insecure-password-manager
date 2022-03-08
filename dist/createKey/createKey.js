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
exports.hashPassword = exports.preprocessNewPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
function preprocessNewPassword(password) {
    password = password.trim();
    password = password.normalize();
    checkPasswordMeetsRequirements(password);
    return password;
}
exports.preprocessNewPassword = preprocessNewPassword;
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        // deepcode ignore HardcodedSecret: <Salt not secret>
        let hash = yield bcrypt_1.default.hash(password, 100);
        console.log(hash);
    });
}
exports.hashPassword = hashPassword;
function checkPasswordMeetsRequirements(password) {
    // Password schema is
    // Must contain letters, numbers, uppercase, lowercase, symbol
    // Must be 8 digits long
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8,}$/;
    const whiteSpaceRegex = /^\S+$/;
    if (!password.match(passwordRegex) || !password.match(whiteSpaceRegex))
        throw new Error(`Password: ${password} does not meet RegEx`);
}
//# sourceMappingURL=createKey.js.map
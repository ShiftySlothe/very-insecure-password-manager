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
const userKey_1 = require("./createKey/userKey");
const password = "IsabeL!?123";
const passwordKeyOptions = {
    passwordHashRounds: 10,
    saltSize: 64,
    keyGenIterations: 1000000,
};
const generateKeys = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const userKeyGenerator = new userKey_1.GenerateUserKey(password, passwordKeyOptions, passwordKeyOptions);
    const { publicKey, privateKey } = yield userKeyGenerator.createUserKeys();
    console.log("Public Key: ", publicKey);
    console.log("Private Key: ", privateKey);
});
generateKeys(password);
//# sourceMappingURL=index.js.map
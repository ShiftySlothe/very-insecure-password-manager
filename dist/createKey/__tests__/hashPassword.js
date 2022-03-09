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
const createKey_1 = require("../createKey");
const bcrypt_1 = __importDefault(require("bcrypt"));
test("hashPassword returns hash given hello", () => __awaiter(void 0, void 0, void 0, function* () {
    const hash = yield (0, createKey_1.hashPassword)("hello", 1);
    const compared = yield bcrypt_1.default.compare("hello", hash);
    expect(compared).toBe(true);
}), 3000);
//# sourceMappingURL=hashPassword.js.map
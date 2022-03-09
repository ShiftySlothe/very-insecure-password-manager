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
const createKey_1 = require("../createKey");
test("createKey creates key given password", () => __awaiter(void 0, void 0, void 0, function* () {
    const saltString = "salt";
    const salt = Buffer.from(saltString, "utf-8");
    const key = yield (0, createKey_1.createPBKDF2Key)("password", salt, 6, 1);
    const keyString = key.toString("hex");
    expect(keyString).toBe("18");
}));
//# sourceMappingURL=createPBKDF2Key.js.map
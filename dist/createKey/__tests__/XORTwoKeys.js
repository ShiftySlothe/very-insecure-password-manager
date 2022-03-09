"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createKey_1 = require("../createKey");
test("XOR Keys: Buffers of different length throw error", () => {
    const a = Buffer.from("1");
    const b = Buffer.from("123456789101112131415");
    expect(() => (0, createKey_1.XORKeys)(a, b)).toThrowError();
});
test("XORKeys: XORS Buffers", () => {
    const a = Buffer.from("00ff0f", "hex");
    const b = Buffer.from("0f0f0f", "hex");
    const expected = "0ff000";
    console.log("result", (0, createKey_1.XORKeys)(a, b).toString("hex"));
    expect((0, createKey_1.XORKeys)(a, b).toString("hex")).toEqual(expected);
});
//# sourceMappingURL=XORTwoKeys.js.map
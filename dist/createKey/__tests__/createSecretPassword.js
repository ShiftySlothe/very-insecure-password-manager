"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createKey_1 = require("../createKey");
test("createSecretPassword creates random keys", () => {
    const key1 = (0, createKey_1.createSecretPassword)();
    const key2 = (0, createKey_1.createSecretPassword)();
    const key3 = (0, createKey_1.createSecretPassword)();
    expect(key1).not.toEqual(key2);
    expect(key2).not.toEqual(key3);
    expect(key3).not.toEqual(key1);
    expect(key1.length).toBeGreaterThan(20);
    expect(key2.length).toBeGreaterThan(20);
    expect(key3.length).toBeGreaterThan(20);
});
//# sourceMappingURL=createSecretPassword.js.map
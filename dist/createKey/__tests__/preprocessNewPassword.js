"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createKey_1 = require("../createKey");
const testData_1 = require("../testData");
// Password schema is
// Must contain letters, numbers, uppercase, lowercase, symbol
// Must be 8 digits long
test("preprocessNewPassword rejects short passwords", () => {
    const farTooShort = "1";
    const slightlyTooShort = "Abc1.?y";
    const longEnough = "Abc1.?yAA";
    expect(() => (0, createKey_1.preprocessNewPassword)(farTooShort)).toThrow(Error);
    expect(() => (0, createKey_1.preprocessNewPassword)(slightlyTooShort)).toThrow(Error);
    expect(() => (0, createKey_1.preprocessNewPassword)(longEnough)).not.toThrowError();
});
test.each(testData_1.badPasswords)("preprocessNewPassword rejects passwords without necessary characters", (badPassword) => {
    expect(() => (0, createKey_1.preprocessNewPassword)(badPassword)).toThrowError();
});
test.each(testData_1.goodPasswords)("preprocessNewPassword accepts good passwords", (goodPassword) => {
    expect(() => (0, createKey_1.preprocessNewPassword)(goodPassword)).not.toThrowError();
});
const mock = jest.fn(createKey_1.preprocessNewPassword);
test("preprocessNewPassword returns a good password", () => {
    mock(testData_1.goodPasswords[0]);
    expect(mock).toReturnWith(testData_1.goodPasswords[0]);
});
//# sourceMappingURL=preprocessNewPassword.js.map
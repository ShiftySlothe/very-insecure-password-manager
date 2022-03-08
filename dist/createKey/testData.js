"use strict";
// Bad Password Examples - all expect to throw error
Object.defineProperty(exports, "__esModule", { value: true });
exports.goodPasswords = exports.badPasswords = void 0;
const justLetters = "aaaAaaaAvdsf";
const justNumbers = "111223677655";
const noUpperCase = "asb.123//sa";
const noSymbol = "Abc123y1asd";
const noNumbers = "Asb.Yuj/as";
const noLetters = "123456././";
const spaceInMiddle = "Abc12 .?1Ajc";
exports.badPasswords = [
    justLetters,
    justNumbers,
    noUpperCase,
    noSymbol,
    noNumbers,
    noLetters,
    spaceInMiddle,
];
// Good password examples
const goodPassword1 = "ABc123.?!";
const goodPassword2 = "12345aB@";
const goodPassword3 = "yuioB1..";
const goodPasswordOnceTrimmed = " yuioB1.. ";
//APAjk01? 
const goodPasswordOnceNormalized = "\uFB00\u0050\u0051\u006a\u006b\u0030\u0031\u003f";
exports.goodPasswords = [
    goodPassword1,
    goodPassword2,
    goodPassword3,
    goodPasswordOnceTrimmed,
    goodPasswordOnceNormalized, // TODO: This currently does nothing to the test suite, find test which needs normalizing
];
//
//# sourceMappingURL=testData.js.map
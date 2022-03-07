// Bad Password Examples

const justLetters = "aaaAaaaAvdsf";
const justNumbers = "111223677655";
const noUpperCase = "asb.123//sa";
const noSymbol = "Abc123y1asd";
const noNumbers = "Asb.Yuj/as";
const noLetters = "123456././";

export const badPasswords = [
  justLetters,
  justNumbers,
  noUpperCase,
  noSymbol,
  noNumbers,
  noLetters,
];

// Good password examples

const goodPassword1 = "ABc123.?!";
const goodPassword2 = "12345aB@";
const goodPassword3 = "yuioB1..";

export const goodPasswords = [goodPassword1, goodPassword2, goodPassword3];

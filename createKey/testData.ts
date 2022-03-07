// Bad Password Examples - all expect to throw error

const justLetters = "aaaAaaaAvdsf";
const justNumbers = "111223677655";
const noUpperCase = "asb.123//sa";
const noSymbol = "Abc123y1asd";
const noNumbers = "Asb.Yuj/as";
const noLetters = "123456././";
const spaceInMiddle = "Abc12 .?1Ajc"

export const badPasswords = [
  justLetters,
  justNumbers,
  noUpperCase,
  noSymbol,
  noNumbers,
  noLetters,
  spaceInMiddle
];

// Good password examples

const goodPassword1 = "ABc123.?!";
const goodPassword2 = "12345aB@";
const goodPassword3 = "yuioB1..";
const goodPasswordOnceTrimmed = " yuioB1.. ";

export const goodPasswords = [
  goodPassword1,
  goodPassword2,
  goodPassword3,
  goodPasswordOnceTrimmed,
];

//

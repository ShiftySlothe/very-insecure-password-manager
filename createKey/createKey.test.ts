import { preprocessNewPassword } from "./createKey";

// Password schema is
// Must contain letters, numbers, uppercase, symbol
// Must be 8 digits long

test("preprocessNewPassword rejects short passwords", () => {
  const farTooShort = "1";
  const slightlyTooShort = "Abc1.?y";
  const longEnough = "Abc1.?yA"
  expect(() => preprocessNewPassword(farTooShort)).toThrow(Error);
  expect(() => preprocessNewPassword(slightlyTooShort)).toThrow(Error);
});

// test("preprocessNewPassword rejects passwords without necessary characters", () => {
//     const justLetters 
// })
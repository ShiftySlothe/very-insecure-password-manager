import { preprocessNewPassword } from "../createKeys";
import { badPasswords, goodPasswords } from "../testData";

// Password schema is
// Must contain letters, numbers, uppercase, lowercase, symbol
// Must be 8 digits long

test("preprocessNewPassword rejects short passwords", () => {
  const farTooShort = "1";
  const slightlyTooShort = "Abc1.?y";
  const longEnough = "Abc1.?yAA";
  expect(() => preprocessNewPassword(farTooShort)).toThrow(Error);
  expect(() => preprocessNewPassword(slightlyTooShort)).toThrow(Error);
  expect(() => preprocessNewPassword(longEnough)).not.toThrowError();
});

test.each(badPasswords)(
  "preprocessNewPassword rejects passwords without necessary characters",
  (badPassword) => {
    expect(() => preprocessNewPassword(badPassword)).toThrowError();
  }
);

test.each(goodPasswords)(
  "preprocessNewPassword accepts good passwords",
  (goodPassword) => {
    expect(() => preprocessNewPassword(goodPassword)).not.toThrowError();
  }
);

const mock = jest.fn(preprocessNewPassword);

test("preprocessNewPassword returns a good password", () => {
  mock(goodPasswords[0]);
  expect(mock).toReturnWith(goodPasswords[0]);
});

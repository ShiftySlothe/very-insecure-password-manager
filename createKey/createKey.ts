import { randomBytes, scrypt } from "crypto";

export function preprocessNewPassword(password: string) {
  password = password.trim();
  password = password.normalize();
  checkPasswordMeetsRequirements(password);
  //   const salt = randomBytes(256);
  //   scrypt(password, salt, 64, (err, derivedKey) => {
  //     if (err) throw err;
  //     console.log(derivedKey.toString("hex")); // '3745e48...08d59ae'
  //   });
}

function checkPasswordMeetsRequirements(password: string) {
  // Password schema is
  // Must contain letters, numbers, uppercase, lowercase, symbol
  // Must be 8 digits long
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8,}$/;
  const whiteSpaceRegex = /^\S+$/;
  if (!password.match(passwordRegex) || !password.match(whiteSpaceRegex))
    throw new Error(`Password: ${password} does not meet RegEx`);
}

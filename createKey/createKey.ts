import { randomBytes, scrypt } from "crypto";

export function preprocessNewPassword(password: string) {
  password = password.trim();
  password = password.normalize();
  checkPasswordMeetsRequirements(password);
  return password;
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

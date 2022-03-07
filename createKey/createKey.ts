export function preprocessNewPassword(password: string) {
  if (password.length < 8) throw new Error(`Password: ${password} too short`);
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8,}$/;
  if (!password.match(passwordRegex))
    throw new Error(`Password: ${password} does not meet RegEx`);


}

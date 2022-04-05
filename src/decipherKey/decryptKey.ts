import bcrypt from "bcrypt";

export async function checkUserPassword(
  password: string,
  passwordHash: string
) {
  const match = await bcrypt.compare(password, passwordHash);
  return match;
}

import { createDecipheriv } from "crypto";
import { hashPassword } from "../createKey/createKeys";

export async function checkUserPassword(
  password: string,
  passwordHash: string
) {
  const hashedPassword = await hashPassword(this.password, PW_HASH_RDS);
  if (hashedPassword !== passwordHash) {
    throw new Error("Hashed passwords must be equal");
  }
}

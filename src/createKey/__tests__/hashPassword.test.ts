import { hashPassword } from "../createKeys";
import bcrypt from "bcrypt";
test("hashPassword returns hash given hello", async () => {
  const hash = await hashPassword("hello", 1);
  const compared = await bcrypt.compare("hello", hash);
  expect(compared).toBe(true);
}, 3000);

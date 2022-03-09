import { createPBKDF2Key } from "../createKey";

test("createKey creates key given password", async () => {
  const saltString = "salt";
  const salt = Buffer.from(saltString, "utf-8");
  const key = await createPBKDF2Key("password", salt, 6, 1);
  const keyString = key.toString("hex");
  expect(keyString).toBe("18");
});

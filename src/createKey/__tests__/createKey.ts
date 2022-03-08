import { createKey } from "../createKey";

test("createKey creates key given password", () => {
  const saltString = "salt";
  const salt = Buffer.from(saltString, "utf-8");
  const key = createKey("password", salt, 6, 1).toString("hex");
  expect(key).toBe("18");
});

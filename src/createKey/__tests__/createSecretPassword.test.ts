import { createSecretPassword } from "../createKeys";

test("createSecretPassword creates random keys", () => {
  const key1 = createSecretPassword();
  const key2 = createSecretPassword();
  const key3 = createSecretPassword();

  expect(key1).not.toEqual(key2);
  expect(key2).not.toEqual(key3);
  expect(key3).not.toEqual(key1);

  expect(key1.length).toBeGreaterThan(20);
  expect(key2.length).toBeGreaterThan(20);
  expect(key3.length).toBeGreaterThan(20);
});

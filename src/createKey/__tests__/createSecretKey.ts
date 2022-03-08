import { createSecretKey } from "../createKey";

test("createSecretKey creates random keys", () => {
  const key1 = createSecretKey();
  const key2 = createSecretKey();
  const key3 = createSecretKey();

  expect(key1).not.toEqual(key2);
  expect(key2).not.toEqual(key3);
  expect(key3).not.toEqual(key1);
  
  expect(key1.length).toBeGreaterThan(20);
  expect(key2.length).toBeGreaterThan(20);
  expect(key3.length).toBeGreaterThan(20);
});

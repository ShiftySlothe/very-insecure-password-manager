import { checkUserPassword } from "../decryptKey";
import { checkUserPasswordData } from "../testData";
test("checkUserPassword returns true given valid data", async () => {
  const { password, passwordHash } = checkUserPasswordData;
  const match = await checkUserPassword(password, passwordHash);
  expect(match).toBe(true);

  const { password2, passwordHash2 } = checkUserPasswordData;
  const match2 = await checkUserPassword(password2, passwordHash2);
  expect(match2).toBe(true);
});

test("checkUserPassword returns false given bad data", async () => {
  const { password, passwordHash2 } = checkUserPasswordData;
  const match = await checkUserPassword(password, passwordHash2);
  expect(match).toBe(false);

  const { password2, passwordHash } = checkUserPasswordData;
  const match2 = await checkUserPassword(password2, passwordHash);
  expect(match2).toBe(false);
});

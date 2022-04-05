import { hkdfSync } from "crypto";
import { CreateKeyOptions, createNewPasswordKey } from "./createKey/createKeys";

async function passwordKeyTest() {
  const key = hkdfSync("sha512", "verysecretpassword", "salty", "info", 64);
  const key2 = hkdfSync("sha512", "verysecretpassword", "salty", "info", 64);

  console.log(key);
  console.log(key2);
}

passwordKeyTest();

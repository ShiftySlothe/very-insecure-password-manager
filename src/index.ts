import { CreateKeyOptions, hashPassword } from "./createKey/createKey";
import { GenerateUserKey } from "./createKey/userKey";

const password = "IsabeL!?123";

const passwordKeyOptions: CreateKeyOptions = {
  passwordHashRounds: 10,
  saltSize: 64,
  keyGenIterations: 1000000,
};

const generateKeys = async (password: string) => {
  const userKeyGenerator = new GenerateUserKey(
    password,
    passwordKeyOptions,
    passwordKeyOptions
  );

  const { publicKey, privateKey } = await userKeyGenerator.createUserKeys();

  console.log("Public Key: ", publicKey);
  console.log("Private Key: ", privateKey);
};

generateKeys(password);

import { PW_HASH_RDS } from "./const";
import { CreateKeyOptions, createSalt } from "./createKey/createKeys";
import { GenerateUserKey } from "./createKey/UserKeys";

const password = "IsabeL!?123";
let generatedPublicKey;
let encryptedPrivateKey;
let generatedSecret;

const passwordKeyOptions: CreateKeyOptions = {
  passwordHashRounds: PW_HASH_RDS,
  saltSize: 64,
  keyGenIterations: 1000000,
};
const addSaltToOpts = async () => {
  passwordKeyOptions.salt = await createSalt(passwordKeyOptions.saltSize);
};

const generateKeys = async (password: string) => {
  const userKeyGenerator = new GenerateUserKey(
    password,
    passwordKeyOptions,
    passwordKeyOptions
  );

  const { publicKey, privateKey, secret } =
    await userKeyGenerator.createUserKeys();

  generatedPublicKey = publicKey;
  encryptedPrivateKey = privateKey;
  generatedSecret = secret;

  console.log("Public Key: ", publicKey);
  console.log("Private Key: ", privateKey);
};

addSaltToOpts();

generateKeys(password);

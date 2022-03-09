import {
  createPasswordKey,
  CreateKeyOptions,
  createSecretPassword,
  XORKeys,
  createKeyPair,
  createSecretKey,
} from "./createKey";

type UserKeyInfo = {
  publicKey: string;
  privateKey: string;
  accountUnlockKey: Buffer;
};

export class GenerateUserKey {
  private publicKey: string;
  private privateKey: string;

  private passwordKey: Buffer;
  private secret: string;
  private secretKey: Buffer;

  private accountUnlockKey: Buffer;

  private password: string;
  private passwordKeyOptions: CreateKeyOptions;
  private secretKeyOptions: CreateKeyOptions;

  constructor(
    password: string,
    passwordKeyOptions: CreateKeyOptions,
    secretKeyOptions: CreateKeyOptions
  ) {
    this.password = password;
    this.passwordKeyOptions = passwordKeyOptions;
    this.secretKeyOptions = secretKeyOptions;
  }

  private createSecret() {
    this.secret = createSecretPassword();
  }

  private async createPasswordKey() {
    this.passwordKey = await createPasswordKey(
      this.password,
      this.passwordKeyOptions
    );
  }

  private async createSecretKey() {
    this.secretKey = await createSecretKey(this.secret, this.secretKeyOptions);
  }

  private async createAccountUnlockKey() {
    await this.createPasswordKey();
    this.createSecret();
    await this.createSecretKey();
    this.accountUnlockKey = XORKeys(this.passwordKey, this.secretKey);
  }

  private async generateKeyPair() {
    const { privateKey, publicKey } = await createKeyPair(
      this.accountUnlockKey
    );
    this.privateKey = privateKey;
    this.publicKey = publicKey;
  }

  public async createUserKeys(): Promise<UserKeyInfo> {
    await this.createAccountUnlockKey();
    await this.generateKeyPair();

    const userKeyInfo: UserKeyInfo = {
      publicKey: this.publicKey,
      privateKey: this.privateKey,
      accountUnlockKey: this.accountUnlockKey,
    };
    return userKeyInfo;
  }
}

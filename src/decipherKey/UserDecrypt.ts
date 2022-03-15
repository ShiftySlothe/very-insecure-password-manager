import { hashPassword } from "../createKey/createKeys";

export class DecryptUserKey {
  private password: string;
  private secert: string;
  private publicKey: string;
  private encryptedPrivateKey: string;
  private salt: Buffer;

  private passwordHash;
  private secretHash;
  private accountUnlockKey;
  private decryptedPrivateKey;

  constructor(
    password: string,
    passwordHash: string,
    secret: string,
    publicKey: string,
    encryptedPrivateKey: string,
    salt: Buffer
  ) {
    this.password = password;
    this.passwordHash = passwordHash;
    this.secert = secret;
    this.publicKey = publicKey;
    this.encryptedPrivateKey = encryptedPrivateKey;
    this.salt = salt;
  }

  async deriveAccountUnlockKey() {
    await this.checkPassword();
  }

  async checkPassword() {
    
  }

  async;
}

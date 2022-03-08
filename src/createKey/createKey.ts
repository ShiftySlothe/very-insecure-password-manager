import bcrypt from "bcrypt";
import { pbkdf2Sync, randomBytes, randomUUID } from "crypto";

const KEY_LENGTH = 64;

export function XORKeys(passwordKey: Buffer, secretKey: Buffer): Buffer {
  if (passwordKey.length !== secretKey.length)
    throw new Error("Key must be of the same length");

  const buffer = Buffer.alloc(passwordKey.length);
  for (let i = 0; i < passwordKey.length; i++) {
    buffer[i] = passwordKey[i] ^ secretKey[i];
  }

  return buffer;
}

export type CreateKeyOptions = {
  passwordHashRounds: number;
  saltSize: number;
  keyGenIterations: number;
};

export async function createKey(password: string, opts: CreateKeyOptions) {
  password = preprocessNewPassword(password);
  const hash = await hashPassword(password, opts.passwordHashRounds);
  const salt = await createSalt(opts.saltSize);
  const key = createPBKDF2Key(hash, salt, opts.keyGenIterations, KEY_LENGTH);

  return key;
}

export function preprocessNewPassword(password: string): string {
  password = password.trim();
  password = password.normalize();
  checkPasswordMeetsRequirements(password);
  return password;
}

export async function hashPassword(
  password: string,
  rounds: number
): Promise<string> {
  // deepcode ignore HardcodedSecret: <Salt not secret>
  const hash = await bcrypt.hash(password, rounds);
  return hash;
}

export async function createSalt(size: number): Promise<Buffer> {
  return randomBytes(size);
}

export function createPBKDF2Key(
  password: string,
  salt: Buffer,
  iterations: number,
  length: number
) {
  return pbkdf2Sync(password, salt, iterations, length, "sha256");
}

export function createSecretPassword(): string {
  return randomUUID({ disableEntropyCache: true });
}

function checkPasswordMeetsRequirements(password: string): void {
  // Password schema is
  // Must contain letters, numbers, uppercase, lowercase, symbol
  // Must be 8 digits long

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8,}$/;

  const whiteSpaceRegex = /^\S+$/;

  if (!password.match(passwordRegex) || !password.match(whiteSpaceRegex))
    throw new Error(`Password: ${password} does not meet RegEx`);
}

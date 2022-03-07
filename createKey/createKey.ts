export function preprocessNewPassword(password: string) {
  if (password.length < 8) throw new Error("Password too short");
  
}

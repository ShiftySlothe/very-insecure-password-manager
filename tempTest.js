const password = "Abc121?yAA";
const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
if (!password.match(regex))
  throw new Error(`Password: ${password} does not meet RegEx`);

console.log(password);

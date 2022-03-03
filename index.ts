#! /usr/bin/env node

"use strict!";

import { program } from "commander";
import argon2 from "argon2";

program
  .name("very-insecure-password-manager")
  .description("I wouldn't use this if I were you")
  .version("1.0.0");

// program
//   .command("hello")
//   .description("Rob told me to do this.")
//   .action(() => console.log("World"));

program
  .command("print")
  .description("Should print hash of password")
  .argument("<password>", "User entered password")
  .action(async (pwd: string) => {
    let hash: string;
    try {
      hash = await argon2.hash(pwd);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to hash password");
    }
    const passwordMatch = await argon2.verify(hash, pwd);
    console.log(passwordMatch);
  });

program.parse();

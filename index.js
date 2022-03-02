#! /usr/bin/env node

"use strict!";

const { program } = require("commander");

program
  .name("very-insecure-password-manager")
  .description("I wouldn't use this if I were you")
  .version("1.0.0");

program
  .command("hello")
  .description("Rob told me to do this.")
  .action(() => console.log("World"));

program.parse();

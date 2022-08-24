// const fs = require("fs");
// const readline = require("readline");
// const yargs = require("yargs");
// const path = require("path");
// const inquirer = require("inquirer");
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import yargs from "yargs";
import readline from "readline";

const [filePath] = process.argv.slice(2);

// const options = yargs.usage("Usage: -p <path to file>").options("p", {
// alias: "path",
// describe: "Path to file",
// type: "string",
// demandOption: true,
// }).argv;
//
// console.log(options);
//

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//callback hell

// rl.question("enter path to file:", (filePath) => {
// rl.question("enter encode format:", (encode) => {
// fs.readFile(filePath, encode, (err, data) => {
// if (err) {
// console.log(err);
// }
//
// console.log(data);
// rl.close;
// });
// });
// });

// const question = async (query) =>
// new Promise((resolve, reject) => rl.question(query, resolve));
//
// (async () => {
// const filePath = await question("enter path to file:");
// const encode = await question("enter encode format:");
// fs.readFile(path.join(__dirname, filePath), encode, (err, data) => {
// if (err) {
// console.log(err);
// }
// console.log(data);
// });
// rl.close();
// })();

const executionDir = process.cwd();

const fileFilter = (fileOrDir) => fs.lstatSync(fileOrDir).isFile();
const list = fs.readdirSync("./").filter(fileFilter);

inquirer
  .prompt([
    {
      name: "fileName",
      type: "list", // input, number, confirm, list, checkbox, password
      message: "choice file to read",
      choices: list,
    },
  ])
  .then(({ fileName }) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  });

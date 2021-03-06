#!/usr/bin/env node

var fs = require('fs');
var program = require("commander");


function getUserHome() {
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}


program
    .version("0.1.2")
    .usage("<command> <parameters>");

program
  .command("new <name>")
  .description("new stuff")
  .action(function(name) {
    // fs.mkdirSync('~/.divshot');
    fs.writeFile(getUserHome() + '/test.txt', name, function () {
      console.log(arguments);
    });
  });

program
  .command("*")
  .action(function() {
    console.log([
      "",
      "\tCommand not found",
      "",
      "\tSee 'hoodie --help' for more information."
    ].join("\n"));
  });

program.parse(process.argv);
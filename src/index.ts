#!/usr/bin/env node

import { connect,disconnect,createadmin } from "./database";

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

clear();
console.log(
  chalk.red(
    figlet.textSync('stockmanager cli', { horizontalLayout: 'full' ,whitespaceBreak: true})
  )
);

program
  .version('0.0.1')
  .description("A CLI for creating stockmanager admin's")
  .option('-d, --debug', 'output extra debugging')
  .option('-u, --username <type>', 'Admin user name')
  .option('-p, --password <type>', 'Admin user password')
  .option('-e, --email <type>', 'Admin user email')
  .parse(process.argv);

const options = program.opts();

if (options.debug) console.log(options);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

if (options.username === undefined) console.log('username needed to create admin');
else if (options.password === undefined) console.log('password needed to create admin');
else if (options.email === undefined) console.log('email needed to create admin');
else {
  console.log('adding new admin user',options);
  
  createadmin(options);
  
}
#!/usr/bin/env node
const commander = require('commander');
const program = new commander.Command();

program.version(require('../package.json').version);

program.parse(process.argv);
  
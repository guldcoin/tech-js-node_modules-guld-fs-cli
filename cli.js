#!/usr/bin/env node
// eslint-disable-file no-console
const program = require('commander')
const VERSION = require('./package.json').version

program
  .name('guld-fs-cli')
  .version(VERSION)
  .description('Guld file system abstraction CLI.')
  .option('-u --user <name>', 'The user name to run as.', (n) => {
    if (n) process.env.GULDNAME = global.GULDNAME = n
    return true
  })
  .option('-r --recursive', 'Perform command recursively.')
  // .option('-q, --quiet', '')
  .command('foreach <command>', 'Run command for each file and/or directory in the given directory.')
  .command('str-replace <path> <old-str> <new-str>', 'Replace old-string with new-string for all files in path.')

program.parse(process.argv)

# guld-fs-cli

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-fs-cli) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-fs-cli/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/cli/guld-fs-cli.html)

[![node package manager](https://img.shields.io/npm/v/guld-fs-cli.svg)](https://www.npmjs.com/package/guld-fs-cli) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-fs-cli.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-fs-cli?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-guld-fs-cli.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-guld-fs-cli/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-fs-cli/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-fs-cli) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-fs-cli/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-fs-cli?type=dev)

Guld file system abstraction CLI.

### Install

##### Node

```sh
npm i -g guld-fs-cli
```

### Usage

##### CLI

```sh
guld-fs --help

  Usage: guld-fs [options] [command]

  Guld file system abstraction CLI.

  Options:

    -V, --version                           output the version number
    -u --user <name>                        The user name to run as.
    -r --recursive                          Perform command recursively.
    -h, --help                              output usage information

  Commands:

    foreach <command>                       Run command for each file and/or directory in the given directory.
    str-replace <path> <old-str> <new-str>  Replace old-string with new-string for all files in path.
    help [cmd]                              display help for [cmd]

```

### License

MIT Copyright isysd


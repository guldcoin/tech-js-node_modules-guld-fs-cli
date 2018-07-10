# guld-fs-cli

Guld file system abstraction CLI.

### Install

```
npm i -g guld-fs-cli
```

### Usage


##### CLI

```
  Usage: guld-fs-cli [options] [command]

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

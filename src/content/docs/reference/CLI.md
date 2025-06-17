---
title: CLI
description: A reference page for cli
---

### Default help

```bash
$ commitlint --help
Usage: commitlint <command> [flags]

A lightweight, fast, and cross-platform CLI tool for linting Git commit messages. ✨

With <3 by Jurien.dev

Flags:
  -h, --help       Show context-sensitive help.
  -v, --version    Print the version number

Commands:
  lint       Test the given message
  install    Install commitlint in your repository

Run "commitlint <command> --help" for more information on a command.
```

### Install

```bash
Usage: commitlint install [flags]

Install commitlint in your repository

Flags:
  -h, --help              Show context-sensitive help.
  -v, --version           Print the version number

      --global            Wether to install commitlint config globally
      --register-hooks    Wether to register commitlint global hooks to git
```

### Lint

```bash
Usage: commitlint lint [<message> ...] [flags]

Test the given message

Arguments:
  [<message> ...]    The message to lint

Flags:
  -h, --help       Show context-sensitive help.
  -v, --version    Print the version number
```

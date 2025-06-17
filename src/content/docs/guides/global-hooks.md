
---
title: Global hooks
description: A simple guide on how to add global git hooks
---

## Commitlint

Commitlint can install a global configuration for you.
You can do so by running the following command:

```bash
commitlint install --global
```

This will place a `commitlint.yml` in one of the following locations:

```text title="Unix systems"
~/.config/commitlint/commitlint.yml
```
```text title="Windows systems"
c:/Users/<username>/AppData/Roaming/commitlint/commitlint.yml
```

Alongside the configuration file a `hooks` folder is created with a default `commit-msg` hook.
To use the hook you need to add a global hooks directory to your git config.

To automatically register the commitlint hooks directory to your git config you can use the `--register-hooks` flag alongside the `--global` flag:

```bash
commitlint install --global --register-hooks
```


Or manually using the following command:
```bash title="Unix systems"
git config --global core.hooksPath ~/.config/commitlint/hooks
```
```bash title="Windows systems"
git config --global core.hooksPath c:/Users/<username>/AppData/Roaming/commitlint/hooks
```

Or add the path to your gitconfig:

```text title="Unix systems gitconfig"
[core]
	hooksPath = ~/.config/commitlint/hooks
```
```text title="Windows systems gitconfig"
[core]
	hooksPath = c:/Users/<username>/AppData/Roaming/commitlint/hooks 
```

## Custom hooks path

You can also use a custom path for your hooks.
Ensure you have a commit-msg hook with the following content:

```bash title="commit-msg"
#!/bin/sh
cat $1 | commitlint
```

This will ensure that commitlint is run on every commit message.

After that you can run the following command to add the hooks directory to your git config:

```bash
git config --global core.hooksPath <your git hooks path>
```

Or add the path to your gitconfig:

```text title="gitconfig"
[core]
	hooksPath = <your git hooks path>
```

---
title: Writing a plugin
description: A simple guide to write plugins
---

### Your first plugin

Creating your first plugin is straightforward. All you need to do is define a validation hook and conform to the expected types provided by this repository.

Here’s a minimal example to get you started:

```go
package main

import (
	"github.com/jurienhamaker/commitlint/parser"
	"github.com/jurienhamaker/commitlint/plugins"
	"github.com/jurienhamaker/commitlint/validator"
)

// InitPlugin is the entry point that registers your custom validation logic.
func InitPlugin(pm *plugins.PluginManager) error {
	pm.RegisterContentsHook("plugin-name", validator)
	return nil
}

// validator is your custom validation function.
// It receives a parsed commit and configuration, and returns validation results.
func validator(commit *parser.ConventionalCommit, config validator.ValidatorConfig) (validator.ValidationResult, error) {
	// Implement your validation logic here...
}
```

### Building your plugin

To build the plugin, run the following command:

```bash
go build -buildmode=plugin
```

This will produce a .so file that can be loaded by the plugin manager at runtime.

[Checkout the guide on installing plugins](/start/installing-plugins) to learn more about how to use your new plugin.

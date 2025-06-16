---
title: Installing plugins
---

Plugins in this system are written in Go and compiled as shared object (.so) files using Go's plugin system.

### How to use plugins

To use plugins, place the compiled .so files in the .commitlint/plugins directory of your repository:

```markdown
.commitlint/
└─ plugins/
   └─ your-plugin.so
```

The system will automatically detect and load any plugins located in this folder during runtime.

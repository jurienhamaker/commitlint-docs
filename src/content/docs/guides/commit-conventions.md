---
title: Commit conventions
description: A guide on commit conventions
---

[Commit conventions](https://www.conventionalcommits.org/en/v1.0.0/) allow your team to add more semantic meaning to your git history. This e.g. includes `type`, `scope` or `breaking changes`.

With this additional information tools can derive useful human-readable information for releases of your project. Some examples are

- Automated, rich changelogs
- Automatic version bumps
- Filter for test harnesses to run

The most common commit conventions follow this pattern:

```text
type(scope?): subject
body?
footer?
```

---

## Multiple scopes

Commitlint supports multiple scopes.
Current delimiter options are:

- `/`
- `\`
- `,`

---

Credits to [commitlint.js.org](https://commitlint.js.org/concepts/commit-conventions.html) for the contents of this page

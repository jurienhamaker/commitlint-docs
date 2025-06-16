---
title: Configuration
description: A reference page for configuring commitlint
---

## Pre-shipped rules

Currently, `commitlint` ships with a opinionated set of rules based on the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) format.
These rules can be changed in the `.commitlint/commitlint.yml` file

Rules follow the same standard as the [popular JS alternative commitlint.js](https://commitlint.js.org/)

## Configuration example

This is an example of a `.commitlint/commitlint.yml` file:

```yaml
enabled: true

rules:
  header-max-length: [2, "always", 100]
  header-trim: [2]
  type-case: [2, "always", "lowercase"]
  type-empty: [2, "never"]
  type-enum:
    [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ]
  subject-case: [2, "never", ["pascal-case", "upper-case"]]
  subject-empty: [2, "never"]
  subject-full-stop: [2, "never", "."]
  body-leading-blank: [1, "always"]
  body-max-line-length: [2, "always", 100]
  footer-leading-blank: [1, "always"]
  footer-max-line-length: [2, "always", 100]
```

---

## Rules

Refer to [Rules](/reference/rules) for a complete list of available rules.

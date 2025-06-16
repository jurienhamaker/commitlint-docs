---
title: Rule configuration
description: A reference page for rule configuration
---

## Configuration

Rules are made out of 3 seperate values. These values represent different parts of the rule.

example: `[2, "always", ["feat", "fix"]]`

## Level

Each rule starts with a number in the array. This number represents the error level of the rule.

- `0` = off
- `1` = warning
- `2` = error

## Always / Never

A rule can also be configured to never apply or always apply. This inverts the checks on the configured rule.

- `never` = The commit may never trigger said rule
- `always` = The commit must always comform to said rule

## Value(s)

Each rule may contain values, these are to further customize the rule.
However each rule has a different requirement for these values.

To make sure what each rule requires, please checkout the [rules documentation](/reference/rules).

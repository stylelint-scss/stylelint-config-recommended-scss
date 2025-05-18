# 15.0.1

- Fixed: change minimum supported Node.js version to `20`.

# 15.0.0

- Changed: updated to [`stylelint-config-recommended@16.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/16.0.0).
- Changed: updated to [`stylelint-scss@6.12.0`](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.12.0).
- Removed: `stylelint` less than `16.16.0` from peer dependencies.
- Removed: Node.js less than `22` support.

# 14.1.0

- Changed: replaced deprecated `scss/at-import-partial-extension` rule with `scss/load-partial-extension` rule.
- Changed: updated to [`stylelint-scss@6.4.0`](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.4.0).

# 14.0.0

- Changed: updated to [`stylelint-config-recommended@14.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/14.0.0).
- Changed: updated to [`stylelint-scss@6.0.0`](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.0.0).
- Removed: `stylelint` less than `16.0.2` from peer dependencies.
- Removed: Node.js less than `18.12.0` support.

# 13.1.0

- Changed: replaced deprecated `scss/at-import-no-partial-leading-underscore` rule with `scss/load-no-partial-leading-underscore` rule.
- Changed: updated to [`stylelint-scss@5.3.0`](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v5.3.0).

# 13.0.0

- Changed: updated to [`stylelint-config-recommended@13.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/13.0.0).
- Changed: updated to [`stylelint-scss@5.1.0`](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v5.1.0).
- Removed: `stylelint` less than `15.10.0` from peer dependencies.

# 12.0.0

- Changed: updated to [`stylelint-scss@5.0.0`](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v5.0.0).

# 11.0.0

- Changed: updated to [`stylelint-config-recommended@12.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/12.0.0).
- Removed: `stylelint` less than `15.5.0` from peer dependencies.

# 10.0.0

- Changed: updated to [`stylelint-config-recommended@11.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/11.0.0).
- Removed: `stylelint` less than `15.3.0` from peer dependencies.

# 9.0.1

- Fixed: disabled `annotation-no-unknown` rule because of false positives.

# 9.0.0

- Changed: updated to [`stylelint-config-recommended@10.0.1`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/10.0.1).
- Changed: updated to [`stylelint-scss@4.4.0`](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v4.4.0).
- Changed: updated stylelint peer dependency to `^15.0.0`.

# 8.0.0

- Changed: updated to [`stylelint-config-recommended@9.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/9.0.0).
- Changed: updated stylelint peer dependency to `^14.10.0`.
- Added: `postcss` as an optional peer dependency.
- Fixed: `annotation-no-unknown` allow `!default` and `!global`.

# 7.0.0

- Changed: updated to [`stylelint-config-recommended@8.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/8.0.0).

# 6.0.0

- Changed: updated to [`stylelint-config-recommended@7.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/7.0.0).
- Changed: updated stylelint peer dependency to `^14.4.0`.
- Fixed: disabled function-no-unknown rule.
- Fixed: `no-invalid-position-at-import-rule` allow `@forward` before `@import`.

# 5.0.2

- Fixed: resolution of `postcss-scss` custom syntax when `postcss@7` is in the tree.

# 5.0.1

- Fixed: turn off the `comment-no-empty` rule when `scss/comment-no-empty` is enabled.

# 5.0.0

This release adds over a dozen new rules.

If needed, you can [extend the config](README.md#extending-the-config) to turn off any of the new rules.

- Removed: `stylelint` less than `14.0.0` from peer dependencies.
- Changed: updated to [`stylelint-config-recommended@6.0.0`](https://github.com/stylelint-scss/stylelint-config-recommended-scss/releases/tag/6.0.0).
- Added: `scss/at-extend-no-missing-placeholder` rule.
- Added: `scss/at-if-no-null` rule.
- Added: `scss/at-import-no-partial-leading-underscore` rule.
- Added: `scss/at-import-partial-extension` rule.
- Added: `scss/comment-no-empty` rule.
- Added: `scss/declaration-nested-properties-no-divided-groups` rule.
- Added: `scss/dollar-variable-no-missing-interpolation` rule.
- Added: `scss/function-quote-no-quoted-strings-inside` rule.
- Added: `scss/function-unquote-no-unquoted-strings-inside` rule.
- Added: `scss/no-duplicate-mixins` rule.
- Added: `scss/no-global-function-names` rule.
- Added: `scss/operator-no-newline-after` rule.
- Added: `scss/operator-no-newline-before` rule.
- Added: `scss/operator-no-unspaced` rule.

# 4.3.0

- Updated `stylelint-config-recommended` dependency to version 5.0.0.

# 4.2.0

- Added: support for stylelint 13.

# 4.1.0

- Added: support for stylelint 12.

# 4.0.0

- **Breaking change** update to peer depedencies: `stylelint`@10.1.0+ and `stylelint-scss`@3.0.0+ are required now.
- Updated: `stylelint-config-recommended` dependency to version 3.0.0.
- Added: support for stylelint 11.

# 3.3.0

- Added: support for stylelint 10.
- Updated `stylelint-config-recommended` dependency to version 2.2.0.

# 3.2.0

- Added: support for stylelint-scss v3.

# 3.1.0

- Added: support for stylelint 9.

# 3.0.0

- Updated `stylelint-config-recommended` dependency to version 2.0.0.
- Updated `stylelint` peer dependency to version 8.3.0.

# 2.0.0

- Updated `stylelint-scss` dependency to version 2.

# 1.0.0

- Initial release

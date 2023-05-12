Follow-up to [this tweet](https://twitter.com/Rich_Harris/status/1657020575854870528) — trying to figure out how to get auto-imports to work for subpackages (`my-lib/subpackage`) ideally without resorting to `declare module`, and without forcing consumers of the library to adopt a specific TypeScript configuration.

If you open this repo in VSCode, it _should_ be possible to auto-import `add` from `my-lib` and `multiply` from `my-lib/subpackage` inside [index.js](index.js), but only the first of those works.

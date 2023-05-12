// auto-import works for the library root — if you start typing
// `add`, it will correctly grab it from `my-lib`
/* add(2, 3); */

// but it doesn't work for subpackages — if i start typing
// `multiply`, nothing happens. when i manually import it,
// it _does_ correctly find the types
/* multiply(2, 3); */

// need to have this here because otherwise my VSCode adds a
// `require` statement instead of an `import`, even though i have
// "type":"module" in my package.json and "module":"esnext" in
// my tsconfig.json. not sure why
export {};

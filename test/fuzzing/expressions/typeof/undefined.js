assert.sameValue(
  typeof undefined,
  "undefined",
  '#1: typeof undefined === "undefined". Actual: ' + (typeof undefined)
);
assert.sameValue(
  typeof void 0,
  "undefined",
  '#2: typeof void 0 === "undefined". Actual: ' + (typeof void 0)
);
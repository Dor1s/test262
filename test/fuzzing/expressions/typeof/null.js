assert.sameValue(
  typeof null,
   "object",
  '#1: typeof null === "object". Actual: ' + (typeof null)
);
assert.sameValue(
  typeof RegExp("0").exec("1"),
   "object",
  '#2: typeof RegExp("0").exec("1") === "object". Actual: ' + (typeof RegExp("0").exec("1"))
);
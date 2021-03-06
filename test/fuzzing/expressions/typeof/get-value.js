assert.sameValue(
  typeof 0,
   "number",
  '#1: typeof 0 === "number". Actual: ' + (typeof 0)
);
var x = 0;
assert.sameValue(
  typeof x,
   "number",
  '#2: typeof x === "number". Actual: ' + (typeof x)
);
var x = new Object();
assert.sameValue(
  typeof x,
   "object",
  '#3: var x = new Object(); typeof x === "object". Actual: ' + (typeof x)
);
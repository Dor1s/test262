function f() {}
function* g() {}
assert.sameValue(
  Object.getPrototypeOf(Object.getPrototypeOf(g)),
  Object.getPrototypeOf(f)
);
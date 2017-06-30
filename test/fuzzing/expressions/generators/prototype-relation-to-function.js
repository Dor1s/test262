function f() {}
var g = function*() {};
assert.sameValue(
  Object.getPrototypeOf(Object.getPrototypeOf(g)),
  Object.getPrototypeOf(f)
);
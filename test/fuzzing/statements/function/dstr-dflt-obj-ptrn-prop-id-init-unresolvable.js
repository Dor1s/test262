function f({ x: y = unresolvableReference } = {}) {}
assert.throws(ReferenceError, function() {
  f();
});
function f({ x = unresolvableReference } = {}) {}
assert.throws(ReferenceError, function() {
  f();
});
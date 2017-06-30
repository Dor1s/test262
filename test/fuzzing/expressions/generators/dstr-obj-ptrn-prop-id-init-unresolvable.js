var f = function*({ x: y = unresolvableReference }) {};
assert.throws(ReferenceError, function() {
  f({});
});
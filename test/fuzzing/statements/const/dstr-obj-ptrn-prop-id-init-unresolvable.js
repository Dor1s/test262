assert.throws(ReferenceError, function() {
  const { x: y = unresolvableReference } = {};
});
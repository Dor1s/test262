assert.throws(ReferenceError, function() {
  const { x = unresolvableReference } = {};
});
assert.throws(ReferenceError, function() {
  let { x = unresolvableReference } = {};
});
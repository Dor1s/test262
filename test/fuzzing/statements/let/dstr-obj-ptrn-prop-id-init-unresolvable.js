assert.throws(ReferenceError, function() {
  let { x: y = unresolvableReference } = {};
});
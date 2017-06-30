assert.throws(ReferenceError, function() {
  0, { x: unresolvable } = {};
});
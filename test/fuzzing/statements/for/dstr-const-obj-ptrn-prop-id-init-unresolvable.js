assert.throws(ReferenceError, function() {
  for (const { x: y = unresolvableReference } = {}; ; ) {
    return;
  }
});
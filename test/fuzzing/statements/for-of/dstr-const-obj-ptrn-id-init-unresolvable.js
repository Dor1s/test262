assert.throws(ReferenceError, function() {
  for (const { x = unresolvableReference } of [{}]) {
    return;
  }
});
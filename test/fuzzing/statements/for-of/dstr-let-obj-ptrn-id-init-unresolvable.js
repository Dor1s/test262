assert.throws(ReferenceError, function() {
  for (let { x = unresolvableReference } of [{}]) {
    return;
  }
});
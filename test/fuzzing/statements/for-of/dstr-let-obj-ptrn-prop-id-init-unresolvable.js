assert.throws(ReferenceError, function() {
  for (let { x: y = unresolvableReference } of [{}]) {
    return;
  }
});
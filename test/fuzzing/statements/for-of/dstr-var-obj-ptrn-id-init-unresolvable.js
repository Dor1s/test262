assert.throws(ReferenceError, function() {
  for (var { x = unresolvableReference } of [{}]) {
    return;
  }
});
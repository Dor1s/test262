assert.throws(ReferenceError, function() {
  for (var { x: y = unresolvableReference } of [{}]) {
    return;
  }
});
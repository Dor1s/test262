assert.throws(ReferenceError, function() {
  for (var { x: y = unresolvableReference } = {}; iterCount < 1; ) {
    return;
  }
});
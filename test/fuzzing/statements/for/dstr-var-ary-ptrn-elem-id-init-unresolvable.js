assert.throws(ReferenceError, function() {
  for (var [ x = unresolvableReference ] = []; iterCount < 1; ) {
    return;
  }
});
assert.throws(ReferenceError, function() {
  for (let [ x = unresolvableReference ] = []; ; ) {
    return;
  }
});
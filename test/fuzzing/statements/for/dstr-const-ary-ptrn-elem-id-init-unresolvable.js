assert.throws(ReferenceError, function() {
  for (const [ x = unresolvableReference ] = []; ; ) {
    return;
  }
});
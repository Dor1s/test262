assert.throws(ReferenceError, function() {
  new function() {}(0, ...unresolvableReference);
});
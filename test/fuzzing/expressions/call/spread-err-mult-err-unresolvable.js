assert.throws(ReferenceError, function() {
  (function() {}(0, ...unresolvableReference));
});
assert.throws(ReferenceError, function() {
  new function() {}({a: 0, ...unresolvableReference});
});
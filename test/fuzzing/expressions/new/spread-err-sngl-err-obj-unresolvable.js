assert.throws(ReferenceError, function() {
  new function() {}({...unresolvableReference});
});
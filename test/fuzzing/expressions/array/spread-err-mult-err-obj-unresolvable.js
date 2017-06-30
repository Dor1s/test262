assert.throws(ReferenceError, function() {
  [{a: 0, ...unresolvableReference}];
});
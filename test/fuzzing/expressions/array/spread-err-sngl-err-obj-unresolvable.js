assert.throws(ReferenceError, function() {
  [{...unresolvableReference}];
});
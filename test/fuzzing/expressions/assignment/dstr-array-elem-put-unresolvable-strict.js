assert.throws(ReferenceError, function() {
  0, [ unresolvable ] = [];
});
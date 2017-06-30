assert.throws(ReferenceError, function() {
  eval(unresolvable);
});
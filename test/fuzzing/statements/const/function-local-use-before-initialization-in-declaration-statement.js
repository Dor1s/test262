assert.throws(ReferenceError, function() {
  (function() {
    const x = x + 1;
  }());
});
assert.throws(ReferenceError, function() {
  (function() {
    x; const x = 1;
  }());
});
assert.throws(ReferenceError, function() {
  (function() {
    let x = x + 1;
  }());
});
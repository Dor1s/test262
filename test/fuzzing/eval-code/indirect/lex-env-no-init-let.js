assert.throws(ReferenceError, function() {
  (0,eval)('typeof x; let x;');
});
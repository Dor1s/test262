assert.throws(ReferenceError, function() {
  eval('typeof x; let x;');
});
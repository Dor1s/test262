assert.throws(ReferenceError, function() {
  eval('typeof x; const x = null;');
});
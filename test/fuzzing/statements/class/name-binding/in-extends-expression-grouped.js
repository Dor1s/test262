assert.throws(ReferenceError, function() {
  (class x extends x {});
});
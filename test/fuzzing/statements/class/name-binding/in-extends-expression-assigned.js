assert.throws(ReferenceError, function() {
  var x = (class x extends x {});
});
function fn({}) {}
assert.throws(TypeError, function() {
  fn();
});
function* f({}) {}
assert.throws(TypeError, function() {
  f(null);
});
function* f({} = undefined) {}
assert.throws(TypeError, function() {
  f();
});
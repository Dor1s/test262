function* f([[x]] = [null]) {}
assert.throws(TypeError, function() {
  f();
});
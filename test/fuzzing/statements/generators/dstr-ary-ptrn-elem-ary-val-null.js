function* f([[x]]) {}
assert.throws(TypeError, function() {
  f([null]);
});
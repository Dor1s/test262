var F = {};
F[Symbol.hasInstance] = null;
assert.throws(TypeError, function() {
  0 instanceof F;
});
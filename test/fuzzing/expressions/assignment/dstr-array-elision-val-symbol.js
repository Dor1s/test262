var s = Symbol();
assert.throws(TypeError, function() {
  0, [,] = s;
});
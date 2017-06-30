var a, x;
assert.throws(TypeError, function() {
  0, { [a.b]: x } = {};
});
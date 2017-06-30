var x;
assert.throws(TypeError, function() {
  0, { x: { x } } = { x: undefined };
});
function f({ w: { x, y, z } = { x: 4, y: 5, z: 6 } }) {}
assert.throws(TypeError, function() {
  f({ w: null });
});
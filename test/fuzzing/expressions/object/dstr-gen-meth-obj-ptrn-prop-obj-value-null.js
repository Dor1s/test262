var obj = {
  *method({ w: { x, y, z } = { x: 4, y: 5, z: 6 } }) {}
};
assert.throws(TypeError, function() {
  obj.method({ w: null });
});
var obj = {
  method({ w: { x, y, z } = undefined }) {}
};
assert.throws(TypeError, function() {
  obj.method({ });
});
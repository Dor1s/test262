var obj = {
  *method({ w: [x, y, z] = [4, 5, 6] } = { w: null }) {}
};
assert.throws(TypeError, function() {
  obj.method();
});
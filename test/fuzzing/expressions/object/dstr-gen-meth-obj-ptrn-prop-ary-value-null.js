var obj = {
  *method({ w: [x, y, z] = [4, 5, 6] }) {}
};
assert.throws(TypeError, function() {
  obj.method({ w: null });
});
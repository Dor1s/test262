var C = class {
  static *method({ w: [x, y, z] = [4, 5, 6] }) {}
};
assert.throws(TypeError, function() {
  C.method({ w: null });
});
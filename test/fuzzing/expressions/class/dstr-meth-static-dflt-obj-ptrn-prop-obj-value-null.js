var C = class {
  static method({ w: { x, y, z } = { x: 4, y: 5, z: 6 } } = { w: null }) {}
};
assert.throws(TypeError, function() {
  C.method();
});
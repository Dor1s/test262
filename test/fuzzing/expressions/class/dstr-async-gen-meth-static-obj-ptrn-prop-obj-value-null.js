var C = class {
  static async *method({ w: { x, y, z } = { x: 4, y: 5, z: 6 } }) {
    
  }
};
var method = C.method;
assert.throws(TypeError, function() {
  method({ w: null });
});
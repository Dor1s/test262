var C = class {
  static async *method({ w: { x, y, z } = { x: 4, y: 5, z: 6 } } = { w: null }) {
    
  }
};
var method = C.method;
assert.throws(TypeError, function() {
  method();
});
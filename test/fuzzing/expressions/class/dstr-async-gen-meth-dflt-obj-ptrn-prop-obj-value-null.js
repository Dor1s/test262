var C = class {
  async *method({ w: { x, y, z } = { x: 4, y: 5, z: 6 } } = { w: null }) {
    
  }
};
var method = C.prototype.method;
assert.throws(TypeError, function() {
  method();
});
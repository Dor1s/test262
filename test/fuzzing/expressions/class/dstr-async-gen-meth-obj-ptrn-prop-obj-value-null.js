var C = class {
  async *method({ w: { x, y, z } = { x: 4, y: 5, z: 6 } }) {
    
  }
};
var method = C.prototype.method;
assert.throws(TypeError, function() {
  method({ w: null });
});
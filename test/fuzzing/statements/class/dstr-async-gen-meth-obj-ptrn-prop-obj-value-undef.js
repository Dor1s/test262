class C {
  async *method({ w: { x, y, z } = undefined }) {
    
  }
};
var method = C.prototype.method;
assert.throws(TypeError, function() {
  method({ });
});
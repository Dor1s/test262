class C {
  static async *method({ w: { x, y, z } = undefined }) {
    
  }
};
var method = C.method;
assert.throws(TypeError, function() {
  method({ });
});
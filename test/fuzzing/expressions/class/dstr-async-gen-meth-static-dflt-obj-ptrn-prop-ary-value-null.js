var C = class {
  static async *method({ w: [x, y, z] = [4, 5, 6] } = { w: null }) {
    
  }
};
var method = C.method;
assert.throws(TypeError, function() {
  method();
});
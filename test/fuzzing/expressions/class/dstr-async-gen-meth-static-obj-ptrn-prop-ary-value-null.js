var C = class {
  static async *method({ w: [x, y, z] = [4, 5, 6] }) {
    
  }
};
var method = C.method;
assert.throws(TypeError, function() {
  method({ w: null });
});
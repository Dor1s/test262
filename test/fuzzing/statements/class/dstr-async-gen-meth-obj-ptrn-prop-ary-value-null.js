class C {
  async *method({ w: [x, y, z] = [4, 5, 6] }) {
    
  }
};
var method = C.prototype.method;
assert.throws(TypeError, function() {
  method({ w: null });
});
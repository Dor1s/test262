class C {
  async *method([{ x }] = []) {
    
  }
};
var method = C.prototype.method;
assert.throws(TypeError, function() {
  method();
});
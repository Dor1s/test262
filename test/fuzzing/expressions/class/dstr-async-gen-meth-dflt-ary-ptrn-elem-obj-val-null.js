var C = class {
  async *method([{ x }] = [null]) {
    
  }
};
var method = C.prototype.method;
assert.throws(TypeError, function() {
  method();
});
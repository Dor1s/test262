var C = class {
  async *method({} = null) {
    
  }
};
var method = C.prototype.method;
assert.throws(TypeError, function() {
  method();
});
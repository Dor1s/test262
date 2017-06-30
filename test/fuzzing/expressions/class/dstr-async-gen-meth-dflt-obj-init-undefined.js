var C = class {
  async *method({} = undefined) {
    
  }
};
var method = C.prototype.method;
assert.throws(TypeError, function() {
  method();
});
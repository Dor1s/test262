var C = class {
  async *method({}) {
    
  }
};
var method = C.prototype.method;
assert.throws(TypeError, function() {
  method(null);
});
class C {
  async *method({} = undefined) {
    
  }
};
var method = C.prototype.method;
assert.throws(TypeError, function() {
  method();
});
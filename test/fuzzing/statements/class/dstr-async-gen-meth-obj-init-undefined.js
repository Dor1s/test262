class C {
  async *method({}) {
    
  }
};
var method = C.prototype.method;
assert.throws(TypeError, function() {
  method(undefined);
});
class C {
  async *method([ x = unresolvableReference ] = []) {
    
  }
};
var method = C.prototype.method;
assert.throws(ReferenceError, function() {
  method();
});
class C {
  async *method({ x: y = unresolvableReference }) {
    
  }
};
var method = C.prototype.method;
assert.throws(ReferenceError, function() {
  method({});
});
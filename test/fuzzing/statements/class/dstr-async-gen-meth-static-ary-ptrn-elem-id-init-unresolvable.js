class C {
  static async *method([ x = unresolvableReference ]) {
    
  }
};
var method = C.method;
assert.throws(ReferenceError, function() {
  method([]);
});
var obj = {
  async *method({ x: y = unresolvableReference } = {}) {
    
  }
};
assert.throws(ReferenceError, function() {
  obj.method();
});
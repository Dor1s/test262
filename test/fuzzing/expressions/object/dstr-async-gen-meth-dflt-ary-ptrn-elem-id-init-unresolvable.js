var obj = {
  async *method([ x = unresolvableReference ] = []) {
    
  }
};
assert.throws(ReferenceError, function() {
  obj.method();
});
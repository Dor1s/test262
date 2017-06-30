var x = 0;
var callCount = 0;
var obj = {
  async *method(x = x) {
    
    callCount = callCount + 1;
  }
};
assert.throws(ReferenceError, function() {
  obj.method();
});
assert.sameValue(callCount, 0, 'generator method body not evaluated');
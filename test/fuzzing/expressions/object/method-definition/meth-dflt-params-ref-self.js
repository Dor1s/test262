var x = 0;
var callCount = 0;
var obj = {
  method(x = x) {
    
    callCount = callCount + 1;
  }
};
assert.throws(ReferenceError, function() {
  obj.method();
});
assert.sameValue(callCount, 0, 'method body not evaluated');
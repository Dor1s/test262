var x = 0;
var callCount = 0;
var C = class {
  method(x = y, y) {
    
    callCount = callCount + 1;
  }
};
assert.throws(ReferenceError, function() {
  C.prototype.method();
});
assert.sameValue(callCount, 0, 'method body not evaluated');
var x = 0;
var callCount = 0;
function f(x = y, y) {
  
  callCount = callCount + 1;
}
assert.throws(ReferenceError, function() {
  f();
});
assert.sameValue(callCount, 0, 'function body not evaluated');
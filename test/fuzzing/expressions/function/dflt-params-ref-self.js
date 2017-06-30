var x = 0;
var callCount = 0;
var f;
f = function(x = x) {
  
  callCount = callCount + 1;
};
assert.throws(ReferenceError, function() {
  f();
});
assert.sameValue(callCount, 0, 'function body not evaluated');
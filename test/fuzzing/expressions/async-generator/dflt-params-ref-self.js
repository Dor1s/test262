var x = 0;
var callCount = 0;
var f;
f = async function*(x = x) {
  
  callCount = callCount + 1;
};
assert.throws(ReferenceError, function() {
  f();
});
assert.sameValue(callCount, 0, 'generator function body not evaluated');
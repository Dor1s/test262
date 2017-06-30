var x = 0;
var callCount = 0;
var f;
f = (x = y, y) => {
  
  callCount = callCount + 1;
};
assert.throws(ReferenceError, function() {
  f();
});
assert.sameValue(callCount, 0, 'arrow function body not evaluated');
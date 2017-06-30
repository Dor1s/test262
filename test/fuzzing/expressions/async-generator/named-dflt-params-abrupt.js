var callCount = 0;
var f;
f = async function* g(_ = (function() { throw new Test262Error(); }())) {
  
  callCount = callCount + 1;
};
assert.throws(Test262Error, function() {
  f();
});
assert.sameValue(callCount, 0, 'generator function body not evaluated');
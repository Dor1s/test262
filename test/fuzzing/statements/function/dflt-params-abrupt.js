var callCount = 0;
function f(_ = (function() { throw new Test262Error(); }())) {
  
  callCount = callCount + 1;
}
assert.throws(Test262Error, function() {
  f();
});
assert.sameValue(callCount, 0, 'function body not evaluated');
var callCount = 0;
var obj = {
  async *method(_ = (function() { throw new Test262Error(); }())) {
    
    callCount = callCount + 1;
  }
};
assert.throws(Test262Error, function() {
  obj.method();
});
assert.sameValue(callCount, 0, 'generator method body not evaluated');
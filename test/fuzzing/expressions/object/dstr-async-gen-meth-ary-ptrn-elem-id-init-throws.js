var obj = {
  async *method([x = (function() { throw new Test262Error(); })()]) {
    
  }
};
assert.throws(Test262Error, function() {
  obj.method([undefined]);
});
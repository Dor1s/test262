function thrower() {
  throw new Test262Error();
}
var obj = {
  async *method({ x = thrower() } = {}) {
    
  }
};
assert.throws(Test262Error, function() {
  obj.method();
});
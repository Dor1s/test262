function thrower() {
  throw new Test262Error();
}
var obj = {
  *method({ x: y = thrower() } = {}) {}
};
assert.throws(Test262Error, function() {
  obj.method();
});
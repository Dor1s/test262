var initCount = 0;
function thrower() {
  throw new Test262Error();
}
var obj = {
  method({ a, b = thrower(), c = ++initCount } = {}) {}
};
assert.throws(Test262Error, function() {
  obj.method();
});
assert.sameValue(initCount, 0);
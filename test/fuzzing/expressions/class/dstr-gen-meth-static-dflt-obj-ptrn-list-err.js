var initCount = 0;
function thrower() {
  throw new Test262Error();
}
var C = class {
  static *method({ a, b = thrower(), c = ++initCount } = {}) {}
};
assert.throws(Test262Error, function() {
  C.method();
});
assert.sameValue(initCount, 0);
var initCount = 0;
function thrower() {
  throw new Test262Error();
}
var C = class {
  method({ a, b = thrower(), c = ++initCount } = {}) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method();
});
assert.sameValue(initCount, 0);
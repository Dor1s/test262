var initCount = 0;
function thrower() {
  throw new Test262Error();
}
var f;
f = async function* h({ a, b = thrower(), c = ++initCount } = {}) {
  
};
assert.throws(Test262Error, function() {
  f();
});
assert.sameValue(initCount, 0);
function thrower() {
  throw new Test262Error();
}
var f;
f = async function* h({ x: y = thrower() } = {}) {
  
};
assert.throws(Test262Error, function() {
  f();
});
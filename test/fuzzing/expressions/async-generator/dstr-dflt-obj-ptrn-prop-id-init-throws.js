function thrower() {
  throw new Test262Error();
}
var f = async function*({ x: y = thrower() } = {}) {
  
};
assert.throws(Test262Error, function() {
  f();
});
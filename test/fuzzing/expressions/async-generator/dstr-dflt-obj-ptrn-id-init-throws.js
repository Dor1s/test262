function thrower() {
  throw new Test262Error();
}
var f = async function*({ x = thrower() } = {}) {
  
};
assert.throws(Test262Error, function() {
  f();
});
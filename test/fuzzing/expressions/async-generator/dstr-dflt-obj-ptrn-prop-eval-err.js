function thrower() {
  throw new Test262Error();
}
var f = async function*({ [thrower()]: x } = {}) {
  
};
assert.throws(Test262Error, function() {
  f();
});
function thrower() {
  throw new Test262Error();
}
var f;
f = async function* h({ [thrower()]: x } = {}) {
  
};
assert.throws(Test262Error, function() {
  f();
});
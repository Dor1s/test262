function thrower() {
  throw new Test262Error();
}
async function* f({ [thrower()]: x } = {}) {
  
};
assert.throws(Test262Error, function() {
  f();
});
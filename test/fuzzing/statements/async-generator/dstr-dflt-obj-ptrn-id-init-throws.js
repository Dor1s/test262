function thrower() {
  throw new Test262Error();
}
async function* f({ x = thrower() } = {}) {
  
};
assert.throws(Test262Error, function() {
  f();
});
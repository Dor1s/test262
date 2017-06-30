function thrower() {
  throw new Test262Error();
}
var f = ({ x = thrower() }) => {};
assert.throws(Test262Error, function() {
  f({});
});
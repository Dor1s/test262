function thrower() {
  throw new Test262Error();
}
var f = ({ x: y = thrower() }) => {};
assert.throws(Test262Error, function() {
  f({});
});
function thrower() {
  throw new Test262Error();
}
var f = ({ [thrower()]: x }) => {};
assert.throws(Test262Error, function() {
  f({});
});
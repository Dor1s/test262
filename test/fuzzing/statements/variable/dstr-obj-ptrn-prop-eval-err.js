function thrower() {
  throw new Test262Error();
}
assert.throws(Test262Error, function() {
  var { [thrower()]: x } = {};
});
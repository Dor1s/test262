function thrower() {
  throw new Test262Error();
}
var C = class {
  static method({ [thrower()]: x } = {}) {}
};
assert.throws(Test262Error, function() {
  C.method();
});
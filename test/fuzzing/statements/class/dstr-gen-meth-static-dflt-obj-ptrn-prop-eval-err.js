function thrower() {
  throw new Test262Error();
}
class C {
  static *method({ [thrower()]: x } = {}) {}
};
assert.throws(Test262Error, function() {
  C.method();
});
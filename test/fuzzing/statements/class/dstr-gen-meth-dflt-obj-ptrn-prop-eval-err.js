function thrower() {
  throw new Test262Error();
}
class C {
  *method({ [thrower()]: x } = {}) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method();
});
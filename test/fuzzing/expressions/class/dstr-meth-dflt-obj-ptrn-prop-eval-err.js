function thrower() {
  throw new Test262Error();
}
var C = class {
  method({ [thrower()]: x } = {}) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method();
});
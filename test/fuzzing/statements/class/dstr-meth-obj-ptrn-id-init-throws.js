function thrower() {
  throw new Test262Error();
}
class C {
  method({ x = thrower() }) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method({});
});
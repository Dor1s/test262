function thrower() {
  throw new Test262Error();
}
class C {
  static *method({ x: y = thrower() }) {}
};
assert.throws(Test262Error, function() {
  C.method({});
});
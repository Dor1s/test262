function thrower() {
  throw new Test262Error();
}
class C {
  static method({ x = thrower() }) {}
};
assert.throws(Test262Error, function() {
  C.method({});
});
var initCount = 0;
function thrower() {
  throw new Test262Error();
}
class C {
  static method({ a, b = thrower(), c = ++initCount }) {}
};
assert.throws(Test262Error, function() {
  C.method({});
});
assert.sameValue(initCount, 0);
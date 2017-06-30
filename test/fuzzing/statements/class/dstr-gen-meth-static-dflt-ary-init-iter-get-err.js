var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
class C {
  static *method([x] = iter) {}
};
assert.throws(Test262Error, function() {
  C.method();
});
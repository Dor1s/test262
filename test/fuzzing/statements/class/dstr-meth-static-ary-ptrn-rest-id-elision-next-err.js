var iter = (function*() { throw new Test262Error(); })();
class C {
  static method([, ...x]) {}
};
assert.throws(Test262Error, function() {
  C.method(iter);
});
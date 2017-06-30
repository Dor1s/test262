var iter = (function*() { throw new Test262Error(); })();
class C {
  method([, ...x] = iter) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method();
});
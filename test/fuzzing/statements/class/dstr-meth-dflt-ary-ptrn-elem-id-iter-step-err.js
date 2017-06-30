var g = {};
g[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};
class C {
  method([x] = g) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method();
});
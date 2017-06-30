var g = {};
g[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};
class C {
  static method([x]) {}
};
assert.throws(Test262Error, function() {
  C.method(g);
});
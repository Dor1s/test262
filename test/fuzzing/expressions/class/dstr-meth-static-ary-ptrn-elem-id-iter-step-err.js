var g = {};
g[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};
var C = class {
  static method([x]) {}
};
assert.throws(Test262Error, function() {
  C.method(g);
});
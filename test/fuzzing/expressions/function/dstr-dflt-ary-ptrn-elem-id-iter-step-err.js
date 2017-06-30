var g = {};
g[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};
var f = function([x] = g) {};
assert.throws(Test262Error, function() {
  f();
});
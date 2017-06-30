var g = {};
g[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};
function* f([x]) {}
assert.throws(Test262Error, function() {
  f(g);
});
var g = {};
g[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};
assert.throws(Test262Error, function() {
  try {
    throw g;
  } catch ([x]) {}
});
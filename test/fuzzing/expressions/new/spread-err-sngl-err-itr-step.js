var iter = {};
iter[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};
assert.throws(Test262Error, function() {
  new function() {}(...iter);
});
var iterable = {};
var iterationCount = 0;
var returnCount = 0;
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    },
    return: function() {
      returnCount += 1;
      return {};
    }
  };
};
assert.throws(Test262Error, function() {
  for (var x of iterable) {
    iterationCount += 1;
  }
});
assert.sameValue(iterationCount, 0, 'The loop body is not evaluated');
assert.sameValue(returnCount, 0, 'Iterator is not closed.');
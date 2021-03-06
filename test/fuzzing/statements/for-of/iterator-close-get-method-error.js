var iterable = {};
var iterationCount = 0;
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return { done: false, value: null };
    },
    get return() {
      throw new Test262Error();
    }
  };
};
assert.throws(Test262Error, function() {
  for (var x of iterable) {
    iterationCount += 1;
    break;
  }
});
assert.sameValue(iterationCount, 1, 'The loop body is evaluated');
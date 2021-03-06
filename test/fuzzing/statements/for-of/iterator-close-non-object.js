var iterable = {};
var iterationCount = 0;
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return { done: false, value: null };
    },
    return: function() {
      return 0;
    }
  };
};
assert.throws(TypeError, function() {
  for (var x of iterable) {
    iterationCount += 1;
    break;
  }
});
assert.sameValue(iterationCount, 1, 'The loop body is evaluated');
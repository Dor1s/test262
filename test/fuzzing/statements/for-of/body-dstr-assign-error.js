var callCount = 0;
var iterationCount = 0;
var iterable = {};
var x = {
  set attr(_) {
    throw new Test262Error();
  }
};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return { done: false, value: [0] };
    },
    return: function() {
      callCount += 1;
    }
  }
};
assert.throws(Test262Error, function() {
  for ([x.attr] of iterable) {
    iterationCount += 1;
  }
});
assert.sameValue(iterationCount, 0, 'The loop body is not evaluated');
assert.sameValue(callCount, 1, 'Iterator is closed');
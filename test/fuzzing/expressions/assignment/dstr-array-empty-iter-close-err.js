var nextCount = 0;
var returnCount = 0;
var iterable = {};
var iterator = {
  next: function() {
    nextCount += 1;
    return { done: true };
  },
  return: function() {
    returnCount += 1;
    throw new Test262Error();
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};
assert.throws(Test262Error, function() {
  0, [] = iterable;
});
assert.sameValue(nextCount, 0);
assert.sameValue(returnCount, 1);
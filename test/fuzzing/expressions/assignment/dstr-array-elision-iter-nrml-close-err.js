var nextCount = 0;
var returnCount = 0;
var iterable = {};
var iterator = {
  next: function() {
    nextCount += 1;
    // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations
    return { done: nextCount > 10 };
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
  0, [ , ] = iterable;
});
assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 1);
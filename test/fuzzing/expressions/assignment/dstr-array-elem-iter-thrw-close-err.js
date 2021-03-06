var nextCount = 0;
var returnCount = 0;
function ReturnError() {}
var iterable = {};
var iterator = {
  next: function() {
    nextCount += 1;
    return { done: true };
  },
  return: function() {
    returnCount += 1;
    // This value should be discarded.
    throw new ReturnError();
  }
};
var thrower = function() {
  throw new Test262Error();
};
iterable[Symbol.iterator] = function() {
  return iterator;
};
assert.throws(Test262Error, function() {
  0, [ {}[thrower()] ] = iterable;
});
assert.sameValue(nextCount, 0);
assert.sameValue(returnCount, 1);
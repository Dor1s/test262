var nextCount = 0;
var returnCount = 0;
var iterable = {};
var thrower = function() {
  throw new Test262Error();
};
var iterator = {
  next: function() {
    nextCount += 1;
    throw new Test262Error();
  },
  return: function() {
    returnCount += 1;
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};
var x;
assert.throws(Test262Error, function() {
  0, [ x , ] = iterable;
});
assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 0);
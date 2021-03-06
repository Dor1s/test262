var nextCount = 0;
var returnCount = 0;
var iterable = {};
var thrower = function() {
  throw new Test262Error();
};
function ReturnError() {}
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
iterable[Symbol.iterator] = function() {
  return iterator;
};
var counter = 0;
assert.throws(Test262Error, function() {
  for ([ {}[thrower()] , ] of [iterable]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
assert.sameValue(nextCount, 0);
assert.sameValue(returnCount, 1);
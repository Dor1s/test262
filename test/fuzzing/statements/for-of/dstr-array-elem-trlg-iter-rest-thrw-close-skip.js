var nextCount = 0;
var returnCount = 0;
var iterable = {};
var x;
var iterator = {
  next: function() {
    nextCount += 1;
    if (nextCount === 2) {
      throw new Test262Error();
    }
    // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations
    return { done: nextCount > 10 };
  },
  return: function() {
    returnCount += 1;
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};
var counter = 0;
assert.throws(Test262Error, function() {
  for ([ x , ...x ] of [iterable]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
assert.sameValue(nextCount, 2);
assert.sameValue(returnCount, 0);
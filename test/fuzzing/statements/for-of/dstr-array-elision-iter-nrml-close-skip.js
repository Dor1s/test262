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
    return {};
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};
var counter = 0;
for ([ , ] of [iterable]) {
  assert.sameValue(nextCount, 1);
  assert.sameValue(returnCount, 0);
  counter += 1;
}
assert.sameValue(counter, 1);
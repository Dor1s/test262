var nextCount = 0;
var returnCount = 0;
var iterable = {};
var x;
var iterator = {
  next: function() {
    nextCount += 1;
    return { done: nextCount > 1 };
  },
  return: function() {
    returnCount += 1;
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};
var counter = 0;
for ([ x , , ] of [iterable]) {
  assert.sameValue(nextCount, 2);
  assert.sameValue(returnCount, 0);
  counter += 1;
}
assert.sameValue(counter, 1);
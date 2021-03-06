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
var result;
var vals = iterable;
result = [ x , , ] = vals;
assert.sameValue(nextCount, 2);
assert.sameValue(returnCount, 0);
assert.sameValue(result, vals);
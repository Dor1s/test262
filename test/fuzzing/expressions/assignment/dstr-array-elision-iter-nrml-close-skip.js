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
var result;
var vals = iterable;
result = [ , ] = vals;
assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 0);
assert.sameValue(result, vals);
var nextCount = 0;
var returnCount = 0;
var iterable = {};
var x, y;
var iterator = {
  next: function() {
    nextCount += 1;
    return { value: nextCount, done: nextCount > 1 };
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
result = [ x , ...y ] = vals;
assert.sameValue(result, vals);
assert.sameValue(nextCount, 2, 'nextCount');
assert.sameValue(returnCount, 0, 'returnCount');
assert.sameValue(x, 1, 'x');
assert.sameValue(y.length, 0, 'y.length');
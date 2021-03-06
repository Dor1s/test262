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
  }
};
var obj = {};
iterable[Symbol.iterator] = function() {
  return iterator;
};
var result;
var vals = iterable;
result = [...obj['a' + 'b']] = vals;
assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 0);
assert(!!obj.ab);
assert.sameValue(obj.ab.length, 0);
assert.sameValue(result, vals);
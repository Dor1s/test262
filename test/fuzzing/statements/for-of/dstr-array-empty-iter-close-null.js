var iterable = {};
var iterator = {
  next: function() {
    return { done: true };
  },
  return: function() {
    return null;
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};
var counter = 0;
assert.throws(TypeError, function() {
  for ([] of [iterable]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
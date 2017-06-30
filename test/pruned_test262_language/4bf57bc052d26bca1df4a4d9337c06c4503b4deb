var iterable = {};
var x;
var nextCount = 0;
var iterator = {
  next: function() {
    nextCount += 1;
    // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations
    return { done: nextCount > 10 };
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
  for ([ x , , ] of [iterable]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
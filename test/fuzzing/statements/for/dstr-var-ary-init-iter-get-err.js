var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
assert.throws(Test262Error, function() {
  for (var [x] = iter; iterCount < 1; ) {
    return;
  }
});
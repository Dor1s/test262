var first = 0;
var second = 0;
var iter = function*() {
  first += 1;
  throw new Test262Error();
  second += 1;
}();
assert.throws(Test262Error, function() {
  for (var [...x] = iter; iterCount < 1; ) {
    return;
  }
});
iter.next();
assert.sameValue(first, 1);
assert.sameValue(second, 0, 'Iterator is closed following abrupt completion.');
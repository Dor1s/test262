var iterable = (function*() {
  throw new Test262Error();
}());
var iterationCount = 0;
assert.throws(Test262Error, function() {
  for (var x of iterable) {
    iterationCount += 1;
  }
});
assert.sameValue(iterationCount, 0, 'The loop body is not evaluated');
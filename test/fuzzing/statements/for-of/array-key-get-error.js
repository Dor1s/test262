var array = [];
var iterationCount = 0;
Object.defineProperty(array, '0', {
  get: function() {
    throw new Test262Error();
  }
});
assert.throws(Test262Error, function() {
  for (var value of array) {
    iterationCount += 1;
  }
});
assert.sameValue(iterationCount, 0, 'The loop body is not evaluated');
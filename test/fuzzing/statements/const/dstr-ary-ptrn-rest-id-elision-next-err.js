var iter = (function*() { throw new Test262Error(); })();
assert.throws(Test262Error, function() {
  const [, ...x] = iter;
});
var iter = (function*() { throw new Test262Error(); })();
assert.throws(Test262Error, function() {
  for (let [, ...x] of [iter]) {
    return;
  }
});
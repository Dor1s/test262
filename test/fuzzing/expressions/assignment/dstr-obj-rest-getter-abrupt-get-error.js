var x;
var count = 0;
assert.throws(Test262Error, function() {
  0, {...x} = { get v() { count++; throw new Test262Error(); } };
});
assert.sameValue(count, 1);
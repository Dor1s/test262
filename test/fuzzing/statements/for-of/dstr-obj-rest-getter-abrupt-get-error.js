var x;
var count = 0;
var counter = 0;
assert.throws(Test262Error, function() {
  for ({...x} of [{ get v() { count++; throw new Test262Error(); } }]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
assert.sameValue(count, 1);
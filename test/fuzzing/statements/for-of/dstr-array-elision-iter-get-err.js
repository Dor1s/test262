var iterable = {};
iterable[Symbol.iterator] = function() {
  throw new Test262Error();
};
var counter = 0;
assert.throws(Test262Error, function() {
  for ([ , ] of [iterable]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
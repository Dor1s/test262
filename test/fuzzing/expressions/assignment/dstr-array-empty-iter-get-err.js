var iterable = {};
iterable[Symbol.iterator] = function() {
  throw new Test262Error();
};
assert.throws(Test262Error, function() {
  0, [] = iterable;
});
var iterable = {};
iterable[Symbol.iterator] = function() {
  throw new Test262Error();
};
var x;
assert.throws(Test262Error, function() {
  0, [ x , ] = iterable;
});
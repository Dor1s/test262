var y = {};
y[Symbol.toPrimitive] = function() {
  throw new Test262Error();
};
assert.throws(Test262Error, function() {
  0 == y;
});
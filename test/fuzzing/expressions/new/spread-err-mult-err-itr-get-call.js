var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
assert.throws(Test262Error, function() {
  new function() {}(0, ...iter);
});
var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
var f = function([x]) {};
assert.throws(Test262Error, function() {
  f(iter);
});
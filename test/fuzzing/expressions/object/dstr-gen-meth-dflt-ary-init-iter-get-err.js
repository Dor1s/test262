var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
var obj = {
  *method([x] = iter) {}
};
assert.throws(Test262Error, function() {
  obj.method();
});
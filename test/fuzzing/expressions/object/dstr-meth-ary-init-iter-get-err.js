var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
var obj = {
  method([x]) {}
};
assert.throws(Test262Error, function() {
  obj.method(iter);
});
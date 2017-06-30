var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
var C = class {
  static method([x] = iter) {}
};
assert.throws(Test262Error, function() {
  C.method();
});
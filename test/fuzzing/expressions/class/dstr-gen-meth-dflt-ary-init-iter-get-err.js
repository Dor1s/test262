var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
var C = class {
  *method([x] = iter) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method();
});
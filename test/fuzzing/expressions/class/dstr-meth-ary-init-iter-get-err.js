var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
var C = class {
  method([x]) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method(iter);
});
function thrower() {
  throw new Test262Error();
}
var C = class {
  static method({ x: y = thrower() }) {}
};
assert.throws(Test262Error, function() {
  C.method({});
});
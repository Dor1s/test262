var C = class {
  static *method([x = (function() { throw new Test262Error(); })()]) {}
};
assert.throws(Test262Error, function() {
  C.method([undefined]);
});
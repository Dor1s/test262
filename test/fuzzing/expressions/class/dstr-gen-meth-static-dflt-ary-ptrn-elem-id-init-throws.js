var C = class {
  static *method([x = (function() { throw new Test262Error(); })()] = [undefined]) {}
};
assert.throws(Test262Error, function() {
  C.method();
});
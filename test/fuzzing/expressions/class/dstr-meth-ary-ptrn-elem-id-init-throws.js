var C = class {
  method([x = (function() { throw new Test262Error(); })()]) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method([undefined]);
});
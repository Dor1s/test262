var C = class {
  async *method([x = (function() { throw new Test262Error(); })()]) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method([undefined]);
});
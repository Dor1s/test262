var iter = (function*() { throw new Test262Error(); })();
var C = class {
  async *method([, ...x] = iter) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method();
});
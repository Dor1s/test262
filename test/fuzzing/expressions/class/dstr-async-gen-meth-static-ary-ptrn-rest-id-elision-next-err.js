var iter = (function*() { throw new Test262Error(); })();
var C = class {
  static async *method([, ...x]) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method(iter);
});
var C = class {
  async *method([x = (function() { throw new Test262Error(); })()] = [undefined]) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method();
});
var C = class {
  static async *method([x = (function() { throw new Test262Error(); })()] = [undefined]) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method();
});
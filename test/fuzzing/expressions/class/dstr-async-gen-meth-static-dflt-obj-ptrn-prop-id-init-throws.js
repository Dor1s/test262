function thrower() {
  throw new Test262Error();
}
var C = class {
  static async *method({ x: y = thrower() } = {}) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method();
});
function thrower() {
  throw new Test262Error();
}
class C {
  static async *method({ x = thrower() } = {}) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method();
});
function thrower() {
  throw new Test262Error();
}
class C {
  async *method({ x: y = thrower() }) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method({});
});
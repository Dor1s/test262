function thrower() {
  throw new Test262Error();
}
var C = class {
  async *method({ x = thrower() }) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method({});
});
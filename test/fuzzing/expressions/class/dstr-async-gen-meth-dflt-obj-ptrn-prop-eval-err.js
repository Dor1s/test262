function thrower() {
  throw new Test262Error();
}
var C = class {
  async *method({ [thrower()]: x } = {}) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method();
});
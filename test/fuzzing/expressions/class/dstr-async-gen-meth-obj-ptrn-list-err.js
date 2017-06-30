var initCount = 0;
function thrower() {
  throw new Test262Error();
}
var C = class {
  async *method({ a, b = thrower(), c = ++initCount }) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method({});
});
assert.sameValue(initCount, 0);
var initCount = 0;
function thrower() {
  throw new Test262Error();
}
var C = class {
  static async *method({ a, b = thrower(), c = ++initCount }) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method({});
});
assert.sameValue(initCount, 0);
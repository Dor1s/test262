var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
class C {
  static async *method([x]) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method(iter);
});
var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
class C {
  async *method([x]) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method(iter);
});
var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};
var C = class {
  async *method([x]) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method(iter);
});
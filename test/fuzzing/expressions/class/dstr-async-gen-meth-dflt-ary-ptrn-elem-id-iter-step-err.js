var g = {};
g[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};
var C = class {
  async *method([x] = g) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method();
});
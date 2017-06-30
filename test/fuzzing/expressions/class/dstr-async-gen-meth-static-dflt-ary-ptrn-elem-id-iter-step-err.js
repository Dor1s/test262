var g = {};
g[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};
var C = class {
  static async *method([x] = g) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method();
});
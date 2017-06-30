var g = {};
g[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};
var obj = {
  async *method([x] = g) {
    
  }
};
assert.throws(Test262Error, function() {
  obj.method();
});
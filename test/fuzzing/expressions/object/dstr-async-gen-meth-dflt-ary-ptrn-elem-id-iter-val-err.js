var poisonedValue = Object.defineProperty({}, 'value', {
  get: function() {
    throw new Test262Error();
  }
});
var g = {};
g[Symbol.iterator] = function() {
  return {
    next: function() {
      return poisonedValue;
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
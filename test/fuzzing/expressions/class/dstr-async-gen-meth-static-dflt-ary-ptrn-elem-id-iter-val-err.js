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
var C = class {
  static async *method([x] = g) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method();
});
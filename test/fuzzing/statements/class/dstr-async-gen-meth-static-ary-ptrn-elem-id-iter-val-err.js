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
class C {
  static async *method([x]) {
    
  }
};
var method = C.method;
assert.throws(Test262Error, function() {
  method(g);
});
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
  async *method([x]) {
    
  }
};
var method = C.prototype.method;
assert.throws(Test262Error, function() {
  method(g);
});
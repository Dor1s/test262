var poisonedValue = Object.defineProperty({}, 'value', {
  get: function() {
    throw new Test262Error();
  }
});
var iter = {};
iter[Symbol.iterator] = function() {
  return {
    next: function() {
      return poisonedValue;
    }
  };
};
var obj = {
  async *method([...x]) {
    
  }
};
assert.throws(Test262Error, function() {
  obj.method(iter);
});
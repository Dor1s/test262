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
var C = class {
  static *method([...x] = iter) {}
};
assert.throws(Test262Error, function() {
  C.method();
});
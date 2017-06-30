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
  method([...x] = iter) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method();
});
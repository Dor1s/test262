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
  method([x]) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method(g);
});
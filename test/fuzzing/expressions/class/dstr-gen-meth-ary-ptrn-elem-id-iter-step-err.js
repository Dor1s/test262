var g = {};
g[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};
var C = class {
  *method([x]) {}
};
var c = new C();
assert.throws(Test262Error, function() {
  c.method(g);
});
var g = {};
g[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};
var f;
f = async function*([x]) {
  
};
assert.throws(Test262Error, function() {
  f(g);
});
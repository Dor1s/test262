var f = function({}) {};
assert.throws(TypeError, function() {
  f(null);
});
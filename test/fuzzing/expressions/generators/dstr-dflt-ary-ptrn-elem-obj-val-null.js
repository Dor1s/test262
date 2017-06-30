var f = function*([{ x }] = [null]) {};
assert.throws(TypeError, function() {
  f();
});
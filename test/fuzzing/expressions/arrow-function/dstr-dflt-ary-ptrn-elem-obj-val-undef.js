var f = ([{ x }] = []) => {};
assert.throws(TypeError, function() {
  f();
});
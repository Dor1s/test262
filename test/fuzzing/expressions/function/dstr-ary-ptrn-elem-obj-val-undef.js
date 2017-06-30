var f = function([{ x }]) {};
assert.throws(TypeError, function() {
  f([]);
});
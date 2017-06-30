const c = null;
assert.throws(TypeError, function() {
  0, { c } = { c: 1 };
});
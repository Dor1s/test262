const c = 1;
assert.throws(TypeError, function() {
  0, { a: c } = { a: 2 };
});
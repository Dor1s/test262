let { x: y = 33 } = { };
assert.sameValue(y, 33);
assert.throws(ReferenceError, function() {
  x;
});
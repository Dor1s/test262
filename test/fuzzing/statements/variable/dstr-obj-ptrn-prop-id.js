var { x: y } = { x: 23 };
assert.sameValue(y, 23);
assert.throws(ReferenceError, function() {
  x;
});
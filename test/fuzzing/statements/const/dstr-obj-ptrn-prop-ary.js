const { w: [x, y, z] = [4, 5, 6] } = { w: [7, undefined, ] };
assert.sameValue(x, 7);
assert.sameValue(y, undefined);
assert.sameValue(z, undefined);
assert.throws(ReferenceError, function() {
  w;
});
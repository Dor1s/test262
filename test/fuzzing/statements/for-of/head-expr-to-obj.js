var x;
assert.throws(TypeError, function() {
  for (x of null) {}
});
assert.throws(TypeError, function() {
  for (x of undefined) {}
});
var counter = 0;
assert.throws(TypeError, function() {
  for ([,] of [true]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
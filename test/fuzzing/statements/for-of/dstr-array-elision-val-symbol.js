var s = Symbol();
var counter = 0;
assert.throws(TypeError, function() {
  for ([,] of [s]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
var x;
var counter = 0;
assert.throws(TypeError, function() {
  for ({ x: { x } } of [{}]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
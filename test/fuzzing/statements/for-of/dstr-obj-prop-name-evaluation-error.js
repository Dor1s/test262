var a, x;
var counter = 0;
assert.throws(TypeError, function() {
  for ({ [a.b]: x } of [{}]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
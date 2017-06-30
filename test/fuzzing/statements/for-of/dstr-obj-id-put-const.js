const c = null;
var counter = 0;
assert.throws(TypeError, function() {
  for ({ c } of [{ c: 1 }]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
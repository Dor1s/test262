const c = 1;
var counter = 0;
assert.throws(TypeError, function() {
  for ({ a: c } of [{ a: 2 }]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);
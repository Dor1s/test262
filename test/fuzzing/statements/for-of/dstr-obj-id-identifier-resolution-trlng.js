var x = null;
var counter = 0;
for ({ x } of [{ x: 1 }]) {
  assert.sameValue(x, 1);
  counter += 1;
}
assert.sameValue(counter, 1);
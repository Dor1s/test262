var x;
var counter = 0;
for ({ x = 1 } of [{ x: null }]) {
  assert.sameValue(x, null);
  counter += 1;
}
assert.sameValue(counter, 1);
var x;
var counter = 0;
for ({ y: x = 1 } of [{ y: null }]) {
  assert.sameValue(x, null);
  counter += 1;
}
assert.sameValue(counter, 1);
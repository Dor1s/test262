var y;
var counter = 0;
for ({ x: [y] } of [{ x: [321] }]) {
  assert.sameValue(y, 321);
  counter += 1;
}
assert.sameValue(counter, 1);
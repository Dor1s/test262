var result, y;
var counter = 0;
for ({ x: { y } } of [{ x: { y: 2 } }]) {
  assert.sameValue(y, 2);
  counter += 1;
}
assert.sameValue(counter, 1);
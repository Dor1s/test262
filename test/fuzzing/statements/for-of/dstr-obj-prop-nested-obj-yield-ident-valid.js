var yield = 2;
var result, x;
var counter = 0;
for ({ x: { x = yield } } of [{ x: {} }]) {
  assert.sameValue(x, 2);
  counter += 1;
}
assert.sameValue(counter, 1);
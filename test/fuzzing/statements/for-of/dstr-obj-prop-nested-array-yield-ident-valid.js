var yield = 22;
var x;
var counter = 0;
for ({ x: [x = yield] } of [{ x: [] }]) {
  assert.sameValue(x, 22);
  counter += 1;
}
assert.sameValue(counter, 1);
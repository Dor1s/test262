var yield = 3;
var x;
var counter = 0;
for ({ x = yield } of [{}]) {
  assert.sameValue(x, 3);
  counter += 1;
}
assert.sameValue(counter, 1);
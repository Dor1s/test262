var x = null;
var counter = 0;
for ({ x, } of [{ x: 2 }]) {
  assert.sameValue(x, 2);
  counter += 1;
}
assert.sameValue(counter, 1);
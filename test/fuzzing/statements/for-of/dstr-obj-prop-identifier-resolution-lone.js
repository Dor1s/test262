var x = null;
var counter = 0;
for ({ a: x } of [{ a: 1 }]) {
  assert.sameValue(x, 1);
  counter += 1;
}
assert.sameValue(counter, 1);
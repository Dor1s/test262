var x;
var counter = 0;
for ({ z: x, a: x } of [{ a: 2, z: 1 }]) {
  assert.sameValue(x, 2);
  counter += 1;
}
assert.sameValue(counter, 1);
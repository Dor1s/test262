var x;
var counter = 0;
for ({ y: x = 1 } of [{ y: undefined }]) {
  assert.sameValue(x, 1);
  counter += 1;
}
assert.sameValue(counter, 1);
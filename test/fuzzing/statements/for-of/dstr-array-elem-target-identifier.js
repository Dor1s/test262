var x, y, z;
var counter = 0;
for ([x, y, z] of [[1, 2, 3]]) {
  assert.sameValue(x, 1);
  assert.sameValue(y, 2);
  assert.sameValue(z, 3);
  counter += 1;
}
assert.sameValue(counter, 1);
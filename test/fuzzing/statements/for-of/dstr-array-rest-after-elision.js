var x;
var counter = 0;
for ([, ...x] of [[1, 2, 3]]) {
  assert.sameValue(x.length, 2);
  assert.sameValue(x[0], 2);
  assert.sameValue(x[1], 3);
  counter += 1;
}
assert.sameValue(counter, 1);
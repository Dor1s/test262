var x, y;
var counter = 0;
for ([x, ...y] of [[1, 2, 3]]) {
  assert.sameValue(x, 1);
  assert.sameValue(y.length, 2);
  assert.sameValue(y[0], 2);
  assert.sameValue(y[1], 3);
  counter += 1;
}
assert.sameValue(counter, 1);
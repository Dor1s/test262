var x, y;
var counter = 0;
for ([, , x, , ...y] of [[1, 2, 3, 4, 5, 6]]) {
  assert.sameValue(x, 3);
  assert.sameValue(y.length, 2);
  assert.sameValue(y[0], 5);
  assert.sameValue(y[1], 6);
  counter += 1;
}
assert.sameValue(counter, 1);
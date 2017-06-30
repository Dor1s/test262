var x = {};
var counter = 0;
for ([...x.y] of [[4, 3, 2]]) {
  assert.sameValue(x.y.length, 3);
  assert.sameValue(x.y[0], 4);
  assert.sameValue(x.y[1], 3);
  assert.sameValue(x.y[2], 2);
  counter += 1;
}
assert.sameValue(counter, 1);
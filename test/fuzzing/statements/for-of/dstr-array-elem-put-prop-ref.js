var x = {};
var counter = 0;
for ([x.y] of [[4]]) {
  assert.sameValue(x.y, 4);
  counter += 1;
}
assert.sameValue(counter, 1);
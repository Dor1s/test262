var x;
var counter = 0;
for ([...{ 1: x }] of [[1, 2, 3]]) {
  assert.sameValue(x, 2);
  counter += 1;
}
assert.sameValue(counter, 1);
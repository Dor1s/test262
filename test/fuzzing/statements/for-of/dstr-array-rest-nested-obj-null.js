var x, length;
var counter = 0;
for ([...{ 0: x, length }] of [[null]]) {
  assert.sameValue(x, null);
  assert.sameValue(length, 1);
  counter += 1;
}
assert.sameValue(counter, 1);
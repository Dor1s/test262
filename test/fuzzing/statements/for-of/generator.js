function* values() {
  yield 2;
  yield 4;
  yield 8;
}
var iterable = values();
var expected = [2, 4, 8];
var i = 0;
for (var x of iterable) {
  assert.sameValue(x, expected[i]);
  i++;
}
assert.sameValue(i, 3);
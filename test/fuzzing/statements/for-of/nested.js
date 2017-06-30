function* values() {
  yield 3;
  yield 7;
}
var outerIterable, expectedOuter, i, innerIterable, expectedInner, j;
outerIterable = values();
expectedOuter = 3;
i = 0;
for (var x of outerIterable) {
  assert.sameValue(x, expectedOuter);
  expectedOuter = 7;
  i++;
  innerIterable = values();
  expectedInner = 3;
  j = 0;
  for (var y of innerIterable) {
    assert.sameValue(y, expectedInner);
    expectedInner = 7;
    j++;
  }
  assert.sameValue(j, 2);
}
assert.sameValue(i, 2);
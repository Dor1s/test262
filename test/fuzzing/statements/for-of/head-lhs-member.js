var iterCount = 0;
var x = {};
for (x.y of [23]) {
  assert.sameValue(x.y, 23);
  iterCount += 1;
}
assert.sameValue(iterCount, 1);
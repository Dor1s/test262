var iterCount = 0;
var x;
for ((x) of [23]) {
  assert.sameValue(x, 23);
  iterCount += 1;
}
assert.sameValue(iterCount, 1);
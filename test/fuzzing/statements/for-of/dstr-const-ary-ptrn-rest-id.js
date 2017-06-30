var values = [1, 2, 3];
var iterCount = 0;
for (const [...x] of [values]) {
  assert(Array.isArray(x));
  assert.sameValue(x.length, 3);
  assert.sameValue(x[0], 1);
  assert.sameValue(x[1], 2);
  assert.sameValue(x[2], 3);
  assert.notSameValue(x, values);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');
var values = [2, 1, 3];
var iterCount = 0;
for (var [[...x] = values] of [[]]) {
  assert(Array.isArray(x));
  assert.sameValue(x[0], 2);
  assert.sameValue(x[1], 1);
  assert.sameValue(x[2], 3);
  assert.sameValue(x.length, 3);
  assert.notSameValue(x, values);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');
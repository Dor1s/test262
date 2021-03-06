var values = [2, 1, 3];
var initCount = 0;
var iterCount = 0;
for (const [[...x] = function() { initCount += 1; }()] = [values]; iterCount < 1; ) {
  assert(Array.isArray(x));
  assert.sameValue(x[0], 2);
  assert.sameValue(x[1], 1);
  assert.sameValue(x[2], 3);
  assert.sameValue(x.length, 3);
  assert.notSameValue(x, values);
  assert.sameValue(initCount, 0);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');
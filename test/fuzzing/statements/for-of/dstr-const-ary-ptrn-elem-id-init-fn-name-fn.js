var iterCount = 0;
for (const [fn = function () {}, xFn = function x() {}] of [[]]) {
  assert.sameValue(fn.name, 'fn');
  assert.notSameValue(xFn.name, 'xFn');
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');
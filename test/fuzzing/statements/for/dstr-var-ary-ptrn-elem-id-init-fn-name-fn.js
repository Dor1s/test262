var iterCount = 0;
for (var [fn = function () {}, xFn = function x() {}] = []; iterCount < 1; ) {
  assert.sameValue(fn.name, 'fn');
  assert.notSameValue(xFn.name, 'xFn');
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');
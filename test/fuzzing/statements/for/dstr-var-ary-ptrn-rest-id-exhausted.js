var iterCount = 0;
for (var [, , ...x] = [1, 2]; iterCount < 1; ) {
  assert(Array.isArray(x));
  assert.sameValue(x.length, 0);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');
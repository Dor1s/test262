var iterCount = 0;
for (let [, , ...x] of [[1, 2]]) {
  assert(Array.isArray(x));
  assert.sameValue(x.length, 0);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');
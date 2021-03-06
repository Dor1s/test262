var iterCount = 0;
for (const [gen = function* () {}, xGen = function* x() {}] = []; iterCount < 1; ) {
  assert.sameValue(gen.name, 'gen');
  assert.notSameValue(xGen.name, 'xGen');
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');
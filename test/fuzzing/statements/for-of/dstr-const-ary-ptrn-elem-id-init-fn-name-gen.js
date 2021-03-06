var iterCount = 0;
for (const [gen = function* () {}, xGen = function* x() {}] of [[]]) {
  assert.sameValue(gen.name, 'gen');
  assert.notSameValue(xGen.name, 'xGen');
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');
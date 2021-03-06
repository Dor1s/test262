var ranCatch = false;
try {
  throw {};
} catch ({ gen = function* () {}, xGen = function* x() {} }) {
  assert.sameValue(gen.name, 'gen');
  assert.notSameValue(xGen.name, 'xGen');
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');
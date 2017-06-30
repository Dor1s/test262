var callCount = 0;
function f([gen = function* () {}, xGen = function* x() {}]) {
  assert.sameValue(gen.name, 'gen');
  assert.notSameValue(xGen.name, 'xGen');
  callCount = callCount + 1;
};
f([]);
assert.sameValue(callCount, 1, 'function invoked exactly once');
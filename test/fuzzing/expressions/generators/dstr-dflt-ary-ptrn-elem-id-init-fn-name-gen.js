var callCount = 0;
var f;
f = function*([gen = function* () {}, xGen = function* x() {}] = []) {
  assert.sameValue(gen.name, 'gen');
  assert.notSameValue(xGen.name, 'xGen');
  callCount = callCount + 1;
};
f().next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
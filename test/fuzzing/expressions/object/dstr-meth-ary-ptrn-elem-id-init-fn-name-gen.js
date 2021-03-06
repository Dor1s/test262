var callCount = 0;
var obj = {
  method([gen = function* () {}, xGen = function* x() {}]) {
    assert.sameValue(gen.name, 'gen');
    assert.notSameValue(xGen.name, 'xGen');
    callCount = callCount + 1;
  }
};
obj.method([]);
assert.sameValue(callCount, 1, 'method invoked exactly once');
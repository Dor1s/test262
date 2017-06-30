var callCount = 0;
var C = class {
  *method({ gen = function* () {}, xGen = function* x() {} }) {
    assert.sameValue(gen.name, 'gen');
    assert.notSameValue(xGen.name, 'xGen');
    callCount = callCount + 1;
  }
};
new C().method({}).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');
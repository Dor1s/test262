var [gen = function* () {}, xGen = function* x() {}] = [];
assert.sameValue(gen.name, 'gen');
assert.notSameValue(xGen.name, 'xGen');
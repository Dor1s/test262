var xGen, gen;
xGen = function* x() {};
gen = function*() {};
assert(xGen.name !== 'xGen');
assert.sameValue(gen.name, 'gen');
verifyNotEnumerable(gen, 'name');
verifyNotWritable(gen, 'name');
verifyConfigurable(gen, 'name');
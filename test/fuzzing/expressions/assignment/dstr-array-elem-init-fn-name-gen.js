var xGen, gen;
var result;
var vals = [];
result = [ xGen = function* x() {}, gen = function*() {} ] = vals;
assert.notSameValue(xGen.name, 'xGen');
assert.sameValue(gen.name, 'gen');
verifyNotEnumerable(gen, 'name');
verifyNotWritable(gen, 'name');
verifyConfigurable(gen, 'name');
assert.sameValue(result, vals);
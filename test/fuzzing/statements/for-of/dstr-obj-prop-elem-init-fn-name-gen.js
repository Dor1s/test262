var xGen, gen;
var counter = 0;
for ({ x: xGen = function* x() {}, x: gen = function*() {} } of [{}]) {
  assert.notSameValue(xGen.name, 'xGen');
  assert.sameValue(gen.name, 'gen');
  verifyNotEnumerable(gen, 'name');
  verifyNotWritable(gen, 'name');
  verifyConfigurable(gen, 'name');
  counter += 1;
}
assert.sameValue(counter, 1);
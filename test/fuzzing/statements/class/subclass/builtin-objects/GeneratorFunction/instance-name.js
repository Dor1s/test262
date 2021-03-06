var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
class GFn extends GeneratorFunction {}
var gfn = new GFn('a', 'b', 'return a + b');
assert.sameValue(
  gfn.name, 'anonymous',
  'Dynamic Functions are called anonymous'
);
verifyNotEnumerable(gfn, 'name');
verifyNotWritable(gfn, 'name');
verifyConfigurable(gfn, 'name');
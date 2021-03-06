class Fn extends Function {}
var fn = new Fn('a', 'b', 'return a + b');
assert.sameValue(
  fn.name, 'anonymous',
  'Dynamic Functions are called anonymous'
);
verifyNotEnumerable(fn, 'name');
verifyNotWritable(fn, 'name');
verifyConfigurable(fn, 'name');
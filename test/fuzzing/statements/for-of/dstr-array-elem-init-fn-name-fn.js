var xFn, fn;
var counter = 0;
for ([ xFn = function x() {}, fn = function() {} ] of [[]]) {
  assert(xFn.name !== 'xFn');
  assert.sameValue(fn.name, 'fn');
  verifyNotEnumerable(fn, 'name');
  verifyNotWritable(fn, 'name');
  verifyConfigurable(fn, 'name');
  counter += 1;
}
assert.sameValue(counter, 1);
var xFn, fn;
var counter = 0;
for ({ x: xFn = function x() {}, x: fn = function() {} } of [{}]) {
  assert.notSameValue(xFn.name, 'xFn');
  assert.sameValue(fn.name, 'fn');
  verifyNotEnumerable(fn, 'name');
  verifyNotWritable(fn, 'name');
  verifyConfigurable(fn, 'name');
  counter += 1;
}
assert.sameValue(counter, 1);
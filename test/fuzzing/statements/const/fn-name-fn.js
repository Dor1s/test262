const xFn = function x() {};
const fn = function() {};
assert(xFn.name !== 'xFn');
assert.sameValue(fn.name, 'fn');
verifyNotEnumerable(fn, 'name');
verifyNotWritable(fn, 'name');
verifyConfigurable(fn, 'name');
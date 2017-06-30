var m = Symbol('method');
var method = { *[m]() {} }[m];
assert.sameValue(method.name, '[method]');
verifyNotEnumerable(method, 'name');
verifyNotWritable(method, 'name');
verifyConfigurable(method, 'name');
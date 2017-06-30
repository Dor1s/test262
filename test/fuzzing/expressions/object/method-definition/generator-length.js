var method = { *method(a, b, c) {} }.method;
assert.sameValue(method.length, 3);
verifyNotEnumerable(method, 'length');
verifyNotWritable(method, 'length');
verifyConfigurable(method, 'length');
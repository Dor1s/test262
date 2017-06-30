var method = { *method() {} }.method;
assert.sameValue(method.name, 'method');
verifyNotEnumerable(method, 'name');
verifyNotWritable(method, 'name');
verifyConfigurable(method, 'name');
var obj = { get m() { return 1234; } };
var desc = Object.getOwnPropertyDescriptor(obj, 'm');
verifyEnumerable(obj, 'm');
verifyConfigurable(obj, 'm');
assert.sameValue(desc.value, undefined, '`value` field');
assert.sameValue(desc.set, undefined, '`set` field');
assert.sameValue(typeof desc.get, 'function', 'type of `get` field');
assert.sameValue(desc.get(), 1234, '`get` function return value');
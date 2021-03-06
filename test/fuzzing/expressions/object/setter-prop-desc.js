var obj = { set m(x) { return x; } };
var desc = Object.getOwnPropertyDescriptor(obj, 'm');
verifyEnumerable(obj, 'm');
verifyConfigurable(obj, 'm');
assert.sameValue(desc.value, undefined, '`value` field');
assert.sameValue(desc.get, undefined, '`get` field');
assert.sameValue(typeof desc.set, 'function', 'type of `set` field');
assert.sameValue(desc.set(436), 436, '`set` function return value');
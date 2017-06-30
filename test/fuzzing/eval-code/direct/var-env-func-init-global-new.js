var initial;
eval('initial = f; function f() { return 234; }');
verifyEnumerable(this, 'f');
verifyWritable(this, 'f');
verifyConfigurable(this, 'f');
assert.sameValue(typeof initial, 'function');
assert.sameValue(initial(), 234);
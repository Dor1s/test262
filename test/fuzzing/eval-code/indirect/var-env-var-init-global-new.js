var initial = null;
(0, eval)('initial = x; var x = 9;');
verifyEnumerable(this, 'x');
verifyWritable(this, 'x');
verifyConfigurable(this, 'x');
assert.sameValue(initial, undefined);
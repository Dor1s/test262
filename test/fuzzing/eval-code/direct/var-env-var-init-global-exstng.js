var initial;
var x = 23;
eval('initial = x; var x = 45;');
verifyEnumerable(this, 'x');
verifyWritable(this, 'x');
verifyNotConfigurable(this, 'x');
assert.sameValue(initial, 23);
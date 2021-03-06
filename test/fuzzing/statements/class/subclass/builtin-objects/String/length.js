class S extends String {}
var s1 = new S();
assert.sameValue(s1.length, 0);
verifyNotWritable(s1, 'length');
verifyNotEnumerable(s1, 'length');
verifyNotConfigurable(s1, 'length');
var s2 = new S('test262');
assert.sameValue(s2.length, 7);
verifyNotWritable(s2, 'length');
verifyNotEnumerable(s2, 'length');
verifyNotConfigurable(s2, 'length');
class C1 { *m(x = 42) {} }
var m1 = C1.prototype.m;
assert.sameValue(m1.length, 0, 'formalslist: x = 42');
verifyNotEnumerable(m1, 'length');
verifyNotWritable(m1, 'length');
verifyConfigurable(m1, 'length');
class C2 { *m(x = 42, y) {} }
var m2 = C2.prototype.m;
assert.sameValue(m2.length, 0, 'formalslist: x = 42, y');
verifyNotEnumerable(m2, 'length');
verifyNotWritable(m2, 'length');
verifyConfigurable(m2, 'length');
class C3 { *m(x, y = 42) {} }
var m3 = C3.prototype.m;
assert.sameValue(m3.length, 1, 'formalslist: x, y = 42');
verifyNotEnumerable(m3, 'length');
verifyNotWritable(m3, 'length');
verifyConfigurable(m3, 'length');
class C4 { *m(x, y = 42, z) {} }
var m4 = C4.prototype.m;
assert.sameValue(m4.length, 1, 'formalslist: x, y = 42, z');
verifyNotEnumerable(m4, 'length');
verifyNotWritable(m4, 'length');
verifyConfigurable(m4, 'length');
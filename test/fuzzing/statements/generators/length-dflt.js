function* f1(x = 42) {}
assert.sameValue(f1.length, 0, 'FormalsList: x = 42');
verifyNotEnumerable(f1, 'length');
verifyNotWritable(f1, 'length');
verifyConfigurable(f1, 'length');
function* f2(x = 42, y) {}
assert.sameValue(f2.length, 0, 'FormalsList: x = 42, y');
verifyNotEnumerable(f2, 'length');
verifyNotWritable(f2, 'length');
verifyConfigurable(f2, 'length');
function* f3(x, y = 42) {}
assert.sameValue(f3.length, 1, 'FormalsList: x, y = 42');
verifyNotEnumerable(f3, 'length');
verifyNotWritable(f3, 'length');
verifyConfigurable(f3, 'length');
function* f4(x, y = 42, z) {}
assert.sameValue(f4.length, 1, 'FormalsList: x, y = 42, z');
verifyNotEnumerable(f4, 'length');
verifyNotWritable(f4, 'length');
verifyConfigurable(f4, 'length');
var set = Object.getOwnPropertyDescriptor({ set m(x = 42) {} }, 'm').set;
assert.sameValue(set.length, 0, 'FormalsList: x = 42');
verifyNotEnumerable(set, 'length');
verifyNotWritable(set, 'length');
verifyConfigurable(set, 'length');
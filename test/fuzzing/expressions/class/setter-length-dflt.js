var C = class { set m(x = 42) {} };
var set = Object.getOwnPropertyDescriptor(C.prototype, 'm').set;
assert.sameValue(set.length, 0, 'FormalsList: x = 42');
verifyNotEnumerable(set, 'length');
verifyNotWritable(set, 'length');
verifyConfigurable(set, 'length');
var re = /./;
assert.sameValue(re.lastIndex, 0);
verifyNotEnumerable(re, 'lastIndex');
verifyWritable(re, 'lastIndex');
verifyNotConfigurable(re, 'lastIndex');
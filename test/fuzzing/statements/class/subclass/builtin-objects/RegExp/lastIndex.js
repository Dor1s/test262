class RE extends RegExp {}
var re = new RE('39?');
re.exec('TC39');
assert.sameValue(re.lastIndex, 0);
verifyWritable(re, 'lastIndex');
verifyNotEnumerable(re, 'lastIndex');
verifyNotConfigurable(re, 'lastIndex');
var attr = 23;
var obj;
obj = { attr };
assert.sameValue(obj.attr, 23);
verifyEnumerable(obj, 'attr');
verifyWritable(obj, 'attr');
verifyConfigurable(obj, 'attr');
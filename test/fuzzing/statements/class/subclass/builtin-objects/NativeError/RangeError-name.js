class Err extends RangeError {}
var err1 = new Err();
assert.sameValue(err1.name, 'RangeError');
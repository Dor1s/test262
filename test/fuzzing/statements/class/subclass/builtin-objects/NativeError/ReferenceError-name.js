class Err extends ReferenceError {}
var err1 = new Err();
assert.sameValue(err1.name, 'ReferenceError');
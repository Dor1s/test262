class Err extends TypeError {}
var err1 = new Err();
assert.sameValue(err1.name, 'TypeError');
class Err extends SyntaxError {}
var err1 = new Err();
assert.sameValue(err1.name, 'SyntaxError');
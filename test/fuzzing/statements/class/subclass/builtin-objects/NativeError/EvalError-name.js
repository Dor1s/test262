class Err extends EvalError {}
var err1 = new Err();
assert.sameValue(err1.name, 'EvalError');
var other = $262.createRealm().global;
var otherEval = other.eval;
otherEval('var x = 23;');
assert.sameValue(typeof x, 'undefined');
assert.sameValue(other.x, 23);
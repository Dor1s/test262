class N extends Number {}
var n = new N(42);
assert.sameValue(n.toFixed(2), '42.00');
assert.sameValue(n.toExponential(2), '4.20e+1');
class Bln extends Boolean {}
var b1 = new Bln(1);
assert.notSameValue(b1, true, 'b1 is an Boolean object');
assert.sameValue(b1.valueOf(), true);
var b2 = new Bln(0);
assert.notSameValue(b2, false, 'bln is an Boolean object');
assert.sameValue(b2.valueOf(), false);
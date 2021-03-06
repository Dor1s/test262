class Sub extends Array {}
var a1 = new Sub(42, 'foo');
assert.sameValue(a1.length, 2);
assert.sameValue(a1[0], 42);
assert.sameValue(a1[1], 'foo');
a1.push(true);
assert.sameValue(a1.length, 3, 'Array#push updates the length property');
assert.sameValue(a1[0], 42);
assert.sameValue(a1[1], 'foo');
assert.sameValue(a1[2], true, 'Adds new item');
var a2 = new Sub(7);
assert.sameValue(a2.length, 7);
var a3 = new Sub();
assert(compareArray(a3, []));
assert.sameValue(a3.length, 0);
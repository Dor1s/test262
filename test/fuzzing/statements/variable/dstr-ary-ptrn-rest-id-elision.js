var values = [1, 2, 3, 4, 5];
var [ , , ...x] = values;
assert(Array.isArray(x));
assert.sameValue(x.length, 3);
assert.sameValue(x[0], 3);
assert.sameValue(x[1], 4);
assert.sameValue(x[2], 5);
assert.notSameValue(x, values);
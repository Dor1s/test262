var values = [1, 2, 3];
const [...[...x]] = values;
assert(Array.isArray(x));
assert.sameValue(x.length, 3);
assert.sameValue(x[0], 1);
assert.sameValue(x[1], 2);
assert.sameValue(x[2], 3);
assert.notSameValue(x, values);
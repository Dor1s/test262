var af = (x, ...y) => { return [x, y.length]; };
assert.sameValue(typeof af, "function");
assert.sameValue(af(1, 1, 1)[0], 1);
assert.sameValue(af(1, 1, 1)[1], 2);
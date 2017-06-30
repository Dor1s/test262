var af = (x) => x;
assert.sameValue(typeof af, "function");
assert.sameValue(af(1), 1);
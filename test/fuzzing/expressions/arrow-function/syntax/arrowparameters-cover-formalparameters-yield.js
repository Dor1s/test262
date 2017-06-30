var af = (yield) => 1;
assert.sameValue(typeof af, "function");
assert.sameValue(af(1), 1);
var af = (arguments) => arguments;
assert.sameValue(typeof af, "function");
assert.sameValue(af(1), 1);
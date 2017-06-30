var af = x =>
{ return x };
assert.sameValue(typeof af, "function");
assert.sameValue(af(1), 1);
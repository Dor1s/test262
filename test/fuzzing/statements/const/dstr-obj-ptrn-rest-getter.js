var count = 0;
const {...x} = { get v() { count++; return 2; } };
assert.sameValue(x.v, 2);
assert.sameValue(count, 1);
verifyEnumerable(x, "v");
verifyWritable(x, "v");
verifyConfigurable(x, "v");
function* foo(await) { yield await; };
assert.sameValue(foo(1).next().value, 1);
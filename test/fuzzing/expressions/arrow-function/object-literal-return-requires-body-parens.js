var keyMaker = val => ({ key: val });
assert.sameValue(keyMaker(1).key, 1);
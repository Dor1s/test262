assert.sameValue(eval('1; if (true) { }'), undefined);
assert.sameValue(eval('2; if (true) { 3; }'), 3);
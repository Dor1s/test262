assert.sameValue(eval('1; while (false) { }'), undefined);
assert.sameValue(eval('2; while (false) { 3; }'), undefined);
assert.sameValue(eval('1; if (false) { }'), undefined);
assert.sameValue(eval('2; if (false) { 3; }'), undefined);
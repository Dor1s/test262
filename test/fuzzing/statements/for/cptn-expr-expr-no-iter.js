assert.sameValue(eval('1; for ( ; false; ) { }'), undefined);
assert.sameValue(eval('2; for ( ; false; ) { 3; }'), undefined);
assert.sameValue(eval('1; for (var run = false; run; ) { }'), undefined);
assert.sameValue(eval('2; for (var run = false; run; ) { 3; }'), undefined);
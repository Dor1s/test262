assert.sameValue(eval('1; with({}) { }'), undefined);
assert.sameValue(eval('2; with({}) { 3; }'), 3);
assert.sameValue(eval('var a; 1; for (a of [0]) { }'), undefined);
assert.sameValue(eval('var b; 2; for (b of [0]) { 3; }'), 3);
assert.sameValue(eval('var a; 1; for (a of []) { }'), undefined);
assert.sameValue(eval('var b; 2; for (b of []) { 3; }'), undefined);
assert.sameValue(eval('var a; 1; for (a in undefined) { }'), undefined);
assert.sameValue(eval('var b; 2; for (b in undefined) { 3; }'), undefined);
assert.sameValue(eval('var c; 4; for (c in null) { }'), undefined);
assert.sameValue(eval('var d; 5; for (d in null) { 6; }'), undefined);
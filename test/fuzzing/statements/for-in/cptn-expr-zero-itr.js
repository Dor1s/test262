assert.sameValue(eval('var a; 1; for (a in {}) { }'), undefined);
assert.sameValue(eval('var b; 2; for (b in {}) { 3; }'), undefined);
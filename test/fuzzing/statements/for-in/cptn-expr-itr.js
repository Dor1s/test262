assert.sameValue(eval('var a; 1; for (a in { x: 0 }) { }'), undefined);
assert.sameValue(eval('var b; 2; for (b in { x: 0 }) { 3; }'), 3);
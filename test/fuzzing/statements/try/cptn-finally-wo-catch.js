assert.sameValue(eval('1; try { } finally { }'), undefined);
assert.sameValue(eval('2; try { 3; } finally { }'), 3);
assert.sameValue(eval('4; try { } finally { 5; }'), undefined);
assert.sameValue(eval('6; try { 7; } finally { 8; }'), 7);
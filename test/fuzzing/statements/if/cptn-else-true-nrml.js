assert.sameValue(eval('1; if (true) { } else { }'), undefined);
assert.sameValue(eval('2; if (true) { 3; } else { }'), 3);
assert.sameValue(eval('4; if (true) { } else { 5; }'), undefined);
assert.sameValue(eval('6; if (true) { 7; } else { 8; }'), 7);
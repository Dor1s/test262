assert.sameValue(eval('1; if (false) { } else { }'), undefined);
assert.sameValue(eval('2; if (false) { } else { 3; }'), 3);
assert.sameValue(eval('4; if (false) { 5; } else { }'), undefined);
assert.sameValue(eval('6; if (false) { 7; } else { 8; }'), 8);
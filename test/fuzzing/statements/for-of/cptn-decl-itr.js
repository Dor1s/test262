assert.sameValue(eval('1; for (var a of [0]) { }'), undefined);
assert.sameValue(eval('2; for (var b of [0]) { 3; }'), 3);
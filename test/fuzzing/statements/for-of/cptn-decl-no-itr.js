assert.sameValue(eval('1; for (var a of []) { }'), undefined);
assert.sameValue(eval('2; for (var b of []) { 3; }'), undefined);
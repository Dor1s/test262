assert.sameValue(eval('1; for (var a in { x: 0 }) { }'), undefined);
assert.sameValue(eval('2; for (var b in { x: 0 }) { 3; }'), 3);
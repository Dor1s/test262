assert.sameValue(eval('1; for (var a in undefined) { }'), undefined);
assert.sameValue(eval('2; for (var b in undefined) { 3; }'), undefined);
assert.sameValue(eval('4; for (var c in null) { }'), undefined);
assert.sameValue(eval('5; for (var d in null) { 6; }'), undefined);
assert.sameValue(eval('1; for (var a in {}) { }'), undefined);
assert.sameValue(eval('2; for (var b in {}) { 3; }'), undefined);
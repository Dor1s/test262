assert.sameValue(eval('1; do { } while (false)'), undefined);
assert.sameValue(eval('2; do { 3; } while (false)'), 3);
assert.sameValue(eval('1; do { break; } while (false)'), undefined);
assert.sameValue(eval('2; do { 3; break; } while (false)'), 3);
assert.sameValue(eval('4; do { continue; } while (false)'), undefined);
assert.sameValue(eval('5; do { 6; continue; } while (false)'), 6);
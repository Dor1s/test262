assert.sameValue(
  eval('1; do { 2; with({}) { 3; break; } 4; } while (false);'), 3
);
assert.sameValue(
  eval('5; do { 6; with({}) { break; } 7; } while (false);'), undefined
);
assert.sameValue(
  eval('8; do { 9; with({}) { 10; continue; } 11; } while (false)'), 10
);
assert.sameValue(
  eval('12; do { 13; with({}) { continue; } 14; } while (false)'), undefined
);
assert.sameValue(
  eval('1; do { 2; if (true) { 3; break; } 4; } while (false)'), 3
);
assert.sameValue(
  eval('5; do { 6; if (true) { break; } 7; } while (false)'), undefined
);
assert.sameValue(
  eval('8; do { 9; if (true) { 10; continue; } 11; } while (false)'), 10
);
assert.sameValue(
  eval('12; do { 13; if (true) { continue; } 14; } while (false)'), undefined
);
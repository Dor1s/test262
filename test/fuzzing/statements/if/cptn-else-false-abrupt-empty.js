assert.sameValue(
  eval('1; do { if (false) { } else { break; } } while (false)'), undefined
);
assert.sameValue(
  eval('2; do { 3; if (false) { } else { break; } } while (false)'), undefined
);
assert.sameValue(
  eval('4; do { if (false) { 5; } else { break; } } while (false)'), undefined
);
assert.sameValue(
  eval('6; do { 7; if (false) { 8; } else { break; } } while (false)'),
  undefined
);
assert.sameValue(
  eval('9; do { if (false) { } else { continue; } } while (false)'), undefined
);
assert.sameValue(
  eval('10; do { 11; if (false) { } else { continue; } } while (false)'),
  undefined
);
assert.sameValue(
  eval('12; do { if (false) { 13; } else { continue; } } while (false)'),
  undefined
);
assert.sameValue(
  eval('14; do { 15; if (false) { 16; } else { continue; } } while (false)'),
  undefined
);
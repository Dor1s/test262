assert.sameValue(
  eval('1; do { if (true) { break; } else { } } while (false)'), undefined
);
assert.sameValue(
  eval('2; do { 3; if (true) { break; } else { } } while (false)'), undefined
);
assert.sameValue(
  eval('4; do { if (true) { break; } else { 5; } } while (false)'), undefined
);
assert.sameValue(
  eval('6; do { 7; if (true) { break; } else { 8; } } while (false)'),
  undefined
);
assert.sameValue(
  eval('1; do { if (true) { continue; } else { } } while (false)'), undefined
);
assert.sameValue(
  eval('2; do { 3; if (true) { continue; } else { } } while (false)'), undefined
);
assert.sameValue(
  eval('4; do { if (true) { continue; } else { 5; } } while (false)'), undefined
);
assert.sameValue(
  eval('6; do { 7; if (true) { continue; } else { 8; } } while (false)'),
  undefined
);
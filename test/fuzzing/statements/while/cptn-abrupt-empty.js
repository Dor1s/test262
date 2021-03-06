assert.sameValue(eval('1; while (true) { break; }'), undefined);
assert.sameValue(eval('2; while (true) { 3; break; }'), 3);
assert.sameValue(
  eval('4; outer: do { while (true) { continue outer; } } while (false)'),
  undefined
);
assert.sameValue(
  eval('5; outer: do { while (true) { 6; continue outer; } } while (false)'), 6
);
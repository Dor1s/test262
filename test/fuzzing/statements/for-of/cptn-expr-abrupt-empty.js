assert.sameValue(eval('var a; 1; for (a of [0]) { break; }'), undefined);
assert.sameValue(eval('var b; 2; for (b of [0]) { 3; break; }'), 3);
assert.sameValue(
  eval('var a; 4; outer: do { for (a of [0]) { continue outer; } } while (false)'),
  undefined
);
assert.sameValue(
  eval('var b; 5; outer: do { for (b of [0]) { 6; continue outer; } } while (false)'),
  6
);
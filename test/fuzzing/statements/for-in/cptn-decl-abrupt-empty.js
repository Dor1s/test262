assert.sameValue(eval('1; for (var a in { x: 0 }) { break; }'), undefined);
assert.sameValue(eval('2; for (var b in { x: 0 }) { 3; break; }'), 3);
assert.sameValue(
  eval('4; outer: do { for (var a in { x: 0 }) { continue outer; } } while (false)'),
  undefined
);
assert.sameValue(
  eval('5; outer: do { for (var b in { x: 0 }) { 6; continue outer; } } while (false)'),
  6
);
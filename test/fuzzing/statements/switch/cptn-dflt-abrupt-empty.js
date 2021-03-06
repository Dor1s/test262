assert.sameValue(eval('1; switch ("a") { default: break; }'), undefined);
assert.sameValue(eval('2; switch ("a") { default: { 3; break; } }'), 3);
assert.sameValue(
  eval('4; do { switch ("a") { default: { continue; } } } while (false)'),
  undefined
);
assert.sameValue(
  eval('5; do { switch ("a") { default: { 6; continue; } } } while (false)'),
  6
);
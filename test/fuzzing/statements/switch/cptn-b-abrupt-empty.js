assert.sameValue(
  eval('1; switch ("a") { default: case "a": break; }'), undefined
);
assert.sameValue(
  eval('2; switch ("a") { default: case "a": { 3; break; } }'), 3
);
assert.sameValue(
  eval('4; do { switch ("a") { default: case "a": continue; } } while (false)'),
  undefined
);
assert.sameValue(
  eval('5; do { switch ("a") { default: case "a": { 6; continue; } } } while (false)'),
  6
);
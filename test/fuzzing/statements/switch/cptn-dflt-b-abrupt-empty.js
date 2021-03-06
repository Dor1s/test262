assert.sameValue(
  eval('1; switch ("a") { default: case "b": break; }'), undefined
);
assert.sameValue(
  eval('2; switch ("a") { default: case "b": { 3; break; } }'), 3
);
assert.sameValue(
  eval('4; do { switch ("a") { default: case "b": continue; } } while (false)'),
  undefined
);
assert.sameValue(
  eval('5; do { switch ("a") { default: case "b": { 6; continue; } } } while (false)'),
  6
);
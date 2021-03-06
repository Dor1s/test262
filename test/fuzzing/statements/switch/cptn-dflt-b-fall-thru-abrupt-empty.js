assert.sameValue(
  eval('1; switch ("a") { default: case "b": 2; case "c": 3; break; }'),
  3,
  'Non-empty value replaces previous non-empty value'
);
assert.sameValue(
  eval('4; switch ("a") { default: case "b": case "c": 5; break; }'),
  5,
  'Non-empty value replaces empty value'
);
assert.sameValue(
  eval('6; switch ("a") { default: case "b": 7; case "c": break; }'),
  7,
  'Empty value does not replace previous non-empty value'
);
assert.sameValue(
  eval('8; do { switch ("a") { default: case "b": 9; case "c": 10; continue; } } while (false)'),
  10,
  'Non-empty value replaces previous non-empty value'
);
assert.sameValue(
  eval('11; do { switch ("a") { default: case "b": case "c": 12; continue; } } while (false)'),
  12,
  'Non-empty value replaces empty value'
);
assert.sameValue(
  eval('13; do { switch ("a") { default: case "b": 14; case "c": continue; } } while (false)'),
  14,
  'Empty value does not replace previous non-empty value'
);
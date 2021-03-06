assert.sameValue(
  eval('1; switch ("a") { case "a": 2; case "b": 3; break; }'),
  3,
  'Non-empty value replaces previous non-empty value'
);
assert.sameValue(
  eval('4; switch ("a") { case "a": case "b": 5; break; }'),
  5,
  'Non-empty value replaces empty value'
);
assert.sameValue(
  eval('6; switch ("a") { case "a": 7; case "b": break; }'),
  7,
  'Empty value does not replace previous non-empty value'
);
assert.sameValue(
  eval('8; do { switch ("a") { case "a": 9; case "b": 10; continue; } } while (false)'),
  10,
  'Non-empty value replaces previous non-empty value'
);
assert.sameValue(
  eval('11; do { switch ("a") { case "a": case "b": 12; continue; } } while (false)'),
  12,
  'Non-empty value replaces empty value'
);
assert.sameValue(
  eval('13; do { switch ("a") { case "a": 14; case "b": continue; } } while (false)'),
  14,
  'Empty value does not replace previous non-empty value'
);
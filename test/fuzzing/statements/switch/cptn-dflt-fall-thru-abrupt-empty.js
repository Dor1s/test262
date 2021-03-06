assert.sameValue(
  eval('1; switch ("a") { case "a": 2; default: 3; break; }'),
  3,
  'Non-empty value replaces previous non-empty value'
);
assert.sameValue(
  eval('4; switch ("a") { case "a": default: 5; break; }'),
  5,
  'Non-empty value replaces empty value'
);
assert.sameValue(
  eval('6; switch ("a") { case "a": 7; default: break; }'),
  7,
  'Empty value does not replace previous non-empty value'
);
assert.sameValue(
  eval('8; do { switch ("a") { case "a": 9; default: 10; continue; } } while (false)'),
  10,
  'Non-empty value replaces previous non-empty value'
);
assert.sameValue(
  eval('11; do { switch ("a") { case "a": default: 12; continue; } } while (false)'),
  12,
  'Non-empty value replaces empty value'
);
assert.sameValue(
  eval('13; do { switch ("a") { case "a": 14; default: continue; } } while (false)'),
  14,
  'Empty value does not replace previous non-empty value'
);
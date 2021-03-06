assert.sameValue(
  eval('1; switch ("a") { case "a": 2; default: 3; }'),
  3,
  'Non-empty value replaces previous non-empty value'
);
assert.sameValue(
  eval('4; switch ("a") { case "a": default: 5; }'),
  5,
  'Non-empty value replaces empty value'
);
assert.sameValue(
  eval('6; switch ("a") { case "a": 7; default: }'),
  7,
  'Empty value does not replace previous non-empty value'
);
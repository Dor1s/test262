assert.sameValue(
  eval('1; switch ("a") { default: case "b": 2; case "c": 3; }'),
  3,
  'Non-empty value replaces previous non-empty value'
);
assert.sameValue(
  eval('4; switch ("a") { default: case "b": case "c": 5; }'),
  5,
  'Non-empty value replaces empty value'
);
assert.sameValue(
  eval('6; switch ("a") { default: case "b": 7; case "c": }'),
  7,
  'Empty value does not replace previous non-empty value'
);
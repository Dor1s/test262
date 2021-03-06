assert.sameValue(
  eval('1; switch ("a") { default: case "a": 2; case "b": 3; }'),
  3,
  'Non-empty value replaces previous non-empty value'
);
assert.sameValue(
  eval('4; switch ("a") { default: case "a": case "b": 5; }'),
  5,
  'Non-empty value replaces empty value'
);
assert.sameValue(
  eval('6; switch ("a") { default: case "a": 7; case "b": }'),
  7,
  'Empty value does not replace previous non-empty value'
);
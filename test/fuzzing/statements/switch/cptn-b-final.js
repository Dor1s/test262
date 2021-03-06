assert.sameValue(
  eval('1; switch ("a") { default: case "a": }'),
  undefined,
  'empty StatementList (lone case)'
);
assert.sameValue(
  eval('2; switch ("a") { default: case "a": 3; }'),
  3,
  'non-empy StatementList (lone case)'
);
assert.sameValue(
  eval('4; switch ("b") { default: case "a": case "b": }'),
  undefined,
  'empty StatementList (following an empty case)'
);
assert.sameValue(
  eval('5; switch ("b") { default: case "a": case "b": 6; }'),
  6,
  'non-empty StatementList (following an empty case)'
);
assert.sameValue(
  eval('7; switch ("b") { default: case "a": 8; case "b": }'),
  undefined,
  'empty StatementList (following a non-empty case)'
);
assert.sameValue(
  eval('9; switch ("b") { default: case "a": 10; case "b": 11; }'),
  11,
  'non-empty StatementList (following a non-empty case)'
);
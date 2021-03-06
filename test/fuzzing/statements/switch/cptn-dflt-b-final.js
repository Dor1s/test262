assert.sameValue(
  eval('1; switch ("a") { default: case "b": }'),
  undefined,
  'empty StatementList (lone case)'
);
assert.sameValue(
  eval('2; switch ("a") { default: case "b": 3; }'),
  3,
  'non-empy StatementList (lone case)'
);
assert.sameValue(
  eval('4; switch ("a") { default: case "b": case "c": }'),
  undefined,
  'empty StatementList (following an empty case)'
);
assert.sameValue(
  eval('5; switch ("a") { default: case "b": case "c": 6; }'),
  6,
  'non-empty StatementList (following an empty case)'
);
assert.sameValue(
  eval('7; switch ("a") { default: case "b": 8; case "c": }'),
  8,
  'empty StatementList (following a non-empty case)'
);
assert.sameValue(
  eval('9; switch ("a") { default: case "b": 10; case "c": 11; }'),
  11,
  'non-empty StatementList (following a non-empty case)'
);
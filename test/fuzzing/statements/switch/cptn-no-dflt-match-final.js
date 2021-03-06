assert.sameValue(
  eval('1; switch ("a") { case "a": }'),
  undefined,
  'empty StatementList (lone case)'
);
assert.sameValue(
  eval('2; switch ("a") { case "a": 3; }'),
  3,
  'non-empy StatementList (lone case)'
);
assert.sameValue(
  eval('4; switch ("b") { case "a": case "b": }'),
  undefined,
  'empty StatementList (following an empty case)'
);
assert.sameValue(
  eval('5; switch ("b") { case "a": case "b": 6; }'),
  6,
  'non-empty StatementList (following an empty case)'
);
assert.sameValue(
  eval('7; switch ("b") { case "a": 8; case "b": }'),
  undefined,
  'empty StatementList (following a non-empty case)'
);
assert.sameValue(
  eval('9; switch ("b") { case "a": 10; case "b": 11; }'),
  11,
  'non-empty StatementList (following a non-empty case)'
);
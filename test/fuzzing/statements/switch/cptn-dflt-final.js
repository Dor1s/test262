assert.sameValue(
  eval('1; switch ("a") { default: }'),
  undefined,
  'empty StatementList (lone case)'
);
assert.sameValue(
  eval('2; switch ("a") { default: 3; }'),
  3,
  'non-empy StatementList (lone case)'
);
assert.sameValue(
  eval('4; switch ("b") { case "a": default: }'),
  undefined,
  'empty StatementList (following an empty case)'
);
assert.sameValue(
  eval('5; switch ("b") { case "a": default: 6; }'),
  6,
  'non-empty StatementList (following an empty case)'
);
assert.sameValue(
  eval('7; switch ("b") { case "a": 8; default: }'),
  undefined,
  'empty StatementList (following a non-empty case)'
);
assert.sameValue(
  eval('9; switch ("b") { case "a": 10; default: 11; }'),
  11,
  'non-empty StatementList (following a non-empty case)'
);
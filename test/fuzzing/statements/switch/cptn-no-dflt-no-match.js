assert.sameValue(
  eval('1; switch ("a") { case null: }'), undefined, 'empty StatementList'
);
assert.sameValue(
  eval('2; switch ("a") { case null: 3; }'),
  undefined,
  'non-empty StatementList'
);
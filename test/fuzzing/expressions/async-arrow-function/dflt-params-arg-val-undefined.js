var callCount = 0;
var ref = async (fromLiteral = 23, fromExpr = 45, fromHole = 99) => {
  assert.sameValue(fromLiteral, 23);
  assert.sameValue(fromExpr, 45);
  assert.sameValue(fromHole, 99);
  callCount = callCount + 1;
};
ref(undefined, void 0).then(() => {
  assert.sameValue(callCount, 1, 'async arrow function invoked exactly once')
}).then($DONE, $DONE);
var callCount = 0;
function* ref(fromLiteral = 23, fromExpr = 45, fromHole = 99) {
  assert.sameValue(fromLiteral, 23);
  assert.sameValue(fromExpr, 45);
  assert.sameValue(fromHole, 99);
  callCount = callCount + 1;
}
ref(undefined, void 0).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
var callCount = 0;
var C = class {
  static async method(fromLiteral = 23, fromExpr = 45, fromHole = 99) {
    assert.sameValue(fromLiteral, 23);
    assert.sameValue(fromExpr, 45);
    assert.sameValue(fromHole, 99);
    callCount = callCount + 1;
  }
}
var ref = C.method;
ref(undefined, void 0).then(() => {
  assert.sameValue(callCount, 1, 'method invoked exactly once');
}).then($DONE, $DONE);
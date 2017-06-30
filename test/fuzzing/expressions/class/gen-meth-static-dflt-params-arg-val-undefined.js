var callCount = 0;
var C = class {
  static *method(fromLiteral = 23, fromExpr = 45, fromHole = 99) {
    assert.sameValue(fromLiteral, 23);
    assert.sameValue(fromExpr, 45);
    assert.sameValue(fromHole, 99);
    callCount = callCount + 1;
  }
};
C.method(undefined, void 0).next();
var ref = C.method;
assert.sameValue(callCount, 1, 'method invoked exactly once');
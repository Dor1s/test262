var callCount = 0;
var obj = {
  *method(fromLiteral = 23, fromExpr = 45, fromHole = 99) {
    assert.sameValue(fromLiteral, 23);
    assert.sameValue(fromExpr, 45);
    assert.sameValue(fromHole, 99);
    callCount = callCount + 1;
  }
};
obj.method(undefined, void 0).next();
var ref = obj.method;
assert.sameValue(callCount, 1, 'generator method invoked exactly once');
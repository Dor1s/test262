var callCount = 0;
var C = class {
  static *method({a, b, ...rest}) {
    assert.sameValue(rest.x, 1);
    assert.sameValue(rest.y, 2);
    assert.sameValue(rest.a, undefined);
    assert.sameValue(rest.b, undefined);
    verifyEnumerable(rest, "x");
    verifyWritable(rest, "x");
    verifyConfigurable(rest, "x");
    verifyEnumerable(rest, "y");
    verifyWritable(rest, "y");
    verifyConfigurable(rest, "y");
    callCount = callCount + 1;
  }
};
C.method({x: 1, y: 2, a: 5, b: 3}).next();
assert.sameValue(callCount, 1, 'method invoked exactly once');
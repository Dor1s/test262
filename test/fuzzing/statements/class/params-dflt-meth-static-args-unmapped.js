var callCount = 0;
class C {
  static method(x, _ = 0) {
    assert.sameValue(x, undefined, 'parameter binding value (initial)');
    assert.sameValue(
      arguments[0], undefined, 'arguments property value (initial)'
    );
    arguments[0] = 1;
    assert.sameValue(
      x, undefined, 'parameter binding value (after arguments modification)'
    );
    assert.sameValue(
      arguments[0], 1, 'arguments property value (after arguments modification)'
    );
    x = 2;
    assert.sameValue(
      x, 2, 'parameter binding value (after parameter binding modification)'
    );
    assert.sameValue(
      arguments[0],
      1,
      'arguments property value (after parameter binding modification)'
    );
    callCount = callCount + 1;
  }
}
C.method();
assert.sameValue(callCount, 1, 'method invoked exactly once');
var callCount = 0;
var C = class {
  static method({ x: [y], }) {
    assert.sameValue(y,45);
    callCount = callCount + 1;
  }
};
C.method({ x: [45] });
assert.sameValue(callCount, 1, 'method invoked exactly once');
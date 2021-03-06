var callCount = 0;
class Test262ParentClass {
  constructor() {
    assert.sameValue(arguments.length, 5);
    assert.sameValue(arguments[0], 5);
    assert.sameValue(arguments[1], 6);
    assert.sameValue(arguments[2], 7);
    assert.sameValue(arguments[3], 8);
    assert.sameValue(arguments[4], 9);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(5, ...[6, 7, 8], 9);
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
var callCount = 0;
class Test262ParentClass {
  constructor() {
    assert.sameValue(arguments.length, 3);
    assert.sameValue(arguments[0], 1);
    assert.sameValue(arguments[1], 2);
    assert.sameValue(arguments[2], 3);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(1, 2, 3, ...[]);
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
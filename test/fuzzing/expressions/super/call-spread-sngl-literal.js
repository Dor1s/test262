var callCount = 0;
class Test262ParentClass {
  constructor() {
    assert.sameValue(arguments.length, 3);
    assert.sameValue(arguments[0], 3);
    assert.sameValue(arguments[1], 4);
    assert.sameValue(arguments[2], 5);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(...[3, 4, 5]);
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
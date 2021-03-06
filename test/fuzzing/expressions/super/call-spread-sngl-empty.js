var callCount = 0;
class Test262ParentClass {
  constructor() {
    assert.sameValue(arguments.length, 0);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(...[]);
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
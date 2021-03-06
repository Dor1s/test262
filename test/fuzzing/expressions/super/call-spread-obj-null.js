var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(Object.keys(obj).length, 0);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({...null});
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
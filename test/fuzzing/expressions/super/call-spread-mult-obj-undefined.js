var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(obj.a, 1);
    assert.sameValue(obj.b, 2);
    assert.sameValue(Object.keys(obj).length, 2);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({a: 1, b: 2, ...undefined});
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
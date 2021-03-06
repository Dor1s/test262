let o = {a: 2, b: 3};
var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(obj.a, 2);
    assert.sameValue(obj.b, 3);
    assert.sameValue(Object.keys(obj).length, 2);
    assert.sameValue(o.a, 2);
    assert.sameValue(o.b, 3);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({a: 1, b: 7, ...o});
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
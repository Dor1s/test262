let executedSetter = false;
var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(obj.c, 1);
    assert.sameValue(executedSetter, false);
    assert.sameValue(Object.keys(obj).length, 1);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({set c(v) { executedSetter = true; }, ...{c: 1}});
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
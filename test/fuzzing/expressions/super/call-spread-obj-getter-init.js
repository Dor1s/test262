let o = {a: 2, b: 3};
let executedGetter = false;
var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(obj.a, 2);
    assert.sameValue(obj.b, 3);
    assert.sameValue(executedGetter, false)
    assert.sameValue(Object.keys(obj).length, 3);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({...o, get c() { executedGetter = true; }});
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
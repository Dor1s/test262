let o = {a: 2, b: 3};
let o2 = {c: 4, d: 5};
var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(obj.a, 2);
    assert.sameValue(obj.b, 3);
    assert.sameValue(obj.c, 4);
    assert.sameValue(obj.d, 5);
    assert.sameValue(Object.keys(obj).length, 4);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({...o, ...o2});
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
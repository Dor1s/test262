let getterCallCount = 0;
let o = {
    get a() {
        return ++getterCallCount;
    }
};
var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(obj.a, 2);
    assert.sameValue(obj.c, 4);
    assert.sameValue(obj.d, 5);
    assert.sameValue(Object.keys(obj).length, 3);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({...o, c: 4, d: 5, a: 42, ...o});
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
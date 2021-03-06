let o = {
    get a() {
        return 42;
    }
};
var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(Object.getOwnPropertyDescriptor(obj, "a").value, 42);
    assert.sameValue(obj.c, 4);
    assert.sameValue(obj.d, 5);
    assert.sameValue(Object.keys(obj).length, 3);
    verifyEnumerable(obj, "a");
    verifyWritable(obj, "a");
    verifyConfigurable(obj, "a");
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({...o, c: 4, d: 5});
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
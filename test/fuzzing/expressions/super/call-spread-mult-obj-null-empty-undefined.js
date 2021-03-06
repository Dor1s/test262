var callCount = 0;
class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(obj.a, 1);
    assert.sameValue(obj.b, 2);
    assert.sameValue(obj.c, 3);
    assert.sameValue(obj.d, 4);
    assert(compareArray(Object.keys(obj), ["a", "b", "c", "d"]));
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({a: 1, ...null, b: 2, ...undefined, c: 3, ...{}, ...{...{}}, d: 4});
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
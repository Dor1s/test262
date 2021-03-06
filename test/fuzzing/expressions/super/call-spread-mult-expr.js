var source = [3, 4, 5];
var target;
var callCount = 0;
class Test262ParentClass {
  constructor() {
    assert.sameValue(arguments.length, 5);
    assert.sameValue(arguments[0], 1);
    assert.sameValue(arguments[1], 2);
    assert.sameValue(arguments[2], 3);
    assert.sameValue(arguments[3], 4);
    assert.sameValue(arguments[4], 5);
    assert.sameValue(target, source);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(1, 2, ...target = source);
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
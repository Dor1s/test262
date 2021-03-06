var iter = {};
iter[Symbol.iterator] = function() {
  var nextCount = 0;
  return {
    next: function() {
      nextCount += 1;
      return { done: nextCount === 3, value: nextCount };
    }
  };
};
var callCount = 0;
class Test262ParentClass {
  constructor() {
    assert.sameValue(arguments.length, 2);
    assert.sameValue(arguments[0], 1);
    assert.sameValue(arguments[1], 2);
    callCount += 1;
  }
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(...iter);
  }
}
new Test262ChildClass();
assert.sameValue(callCount, 1);
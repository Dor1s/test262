var iter = {};
var poisonedValue = Object.defineProperty({}, 'value', {
  get: function() {
    throw new Test262Error();
  }
});
iter[Symbol.iterator] = function() {
  return {
    next: function() {
      return poisonedValue;
    }
  };
};
class Test262ParentClass {
  constructor() {}
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(...iter);
  }
}
assert.throws(Test262Error, function() {
  new Test262ChildClass();
});
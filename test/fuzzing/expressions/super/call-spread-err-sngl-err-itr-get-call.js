var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
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
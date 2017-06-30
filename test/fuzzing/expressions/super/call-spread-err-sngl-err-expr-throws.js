class Test262ParentClass {
  constructor() {}
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(...function*() { throw new Test262Error(); }());
  }
}
assert.throws(Test262Error, function() {
  new Test262ChildClass();
});
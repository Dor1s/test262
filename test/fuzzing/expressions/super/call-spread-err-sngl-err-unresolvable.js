class Test262ParentClass {
  constructor() {}
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(...unresolvableReference);
  }
}
assert.throws(ReferenceError, function() {
  new Test262ChildClass();
});
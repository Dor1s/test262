class Test262ParentClass {
  constructor() {}
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(0, ...unresolvableReference);
  }
}
assert.throws(ReferenceError, function() {
  new Test262ChildClass();
});
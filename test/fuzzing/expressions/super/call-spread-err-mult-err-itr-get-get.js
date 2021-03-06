var iter = {};
Object.defineProperty(iter, Symbol.iterator, {
  get: function() {
    throw new Test262Error();
  }
});
class Test262ParentClass {
  constructor() {}
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(0, ...iter);
  }
}
assert.throws(Test262Error, function() {
  new Test262ChildClass();
});
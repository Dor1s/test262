var iter = {};
Object.defineProperty(iter, Symbol.iterator, {
  get: function() {
    return null;
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
assert.throws(TypeError, function() {
  new Test262ChildClass();
});
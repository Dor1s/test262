var iter = {};
iter[Symbol.iterator] = function() {
  return null;
};
class Test262ParentClass {
  constructor() {}
}
class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(...iter);
  }
}
assert.throws(TypeError, function() {
  new Test262ChildClass();
});
var newTarget = null;
class Parent {
  get attr() {
    newTarget = new.target;
  }
}
class Child extends Parent {
  constructor() {
    super();
    super.attr;
  }
}
new Child();
assert.sameValue(newTarget, undefined);
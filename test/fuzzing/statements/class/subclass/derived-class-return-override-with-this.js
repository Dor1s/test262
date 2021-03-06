var calls = 0;
class Base {
  constructor() {
    this.prop = 1;
    calls++;
  }
}
class Derived extends Base {
  constructor() {
    super();
    return this;
  }
}
var object = new Derived();
assert.sameValue(calls, 1, "The value of `calls` is `1`, because `super()`");
assert.sameValue(object.prop, 1);
assert.sameValue(object instanceof Derived, true);
assert.sameValue(object instanceof Base, true);
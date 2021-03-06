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
    return {};
  }
}
var object = new Derived();
assert.sameValue(calls, 1, "The value of `calls` is `1`, because `super()`");
assert.sameValue(typeof object.prop, "undefined");
assert.sameValue(object instanceof Derived, false);
assert.sameValue(object instanceof Base, false);
class Base {
  constructor() {}
}
class Derived extends Base {
  constructor() {
    super();
    return "";
  }
}
assert.throws(TypeError, function() {
  new Derived();
});
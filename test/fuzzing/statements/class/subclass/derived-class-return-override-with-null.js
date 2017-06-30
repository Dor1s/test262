class Base {
  constructor() {}
}
class Derived extends Base {
  constructor() {
    super();
    return null;
  }
}
assert.throws(TypeError, function() {
  new Derived();
});
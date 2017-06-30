class Base {
  constructor() {}
}
class Derived extends Base {
  constructor() {
    super();
    return true;
  }
}
assert.throws(TypeError, function() {
  new Derived();
});
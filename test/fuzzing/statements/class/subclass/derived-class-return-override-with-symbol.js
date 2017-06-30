class Base {
  constructor() {}
}
class Derived extends Base {
  constructor() {
    super();
    return Symbol();
  }
}
assert.throws(TypeError, function() {
  new Derived();
});
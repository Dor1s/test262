var calls = 0;
class Base {
  constructor() {
    calls++;
  }
}
class Derived extends Base {}
var object = new Derived();
assert.sameValue(calls, 1, "The value of `calls` is `1`");
calls = 0;
assert.throws(TypeError, function() { Derived(); });
assert.sameValue(calls, 0, "The value of `calls` is `0`");
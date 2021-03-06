var calls = 0;
var Base = function() {}.bind();
Object.defineProperty(Base, 'prototype', {
  get: function() {
    calls++;
    return null;
  },
  configurable: true
});
class C extends Base {}
assert.sameValue(calls, 1, "The value of `calls` is `1`");
calls = 0;
Object.defineProperty(Base, 'prototype', {
  get: function() {
    calls++;
    return 42;
  },
  configurable: true
});
assert.throws(TypeError, function() {
  class C extends Base {}
});
assert.sameValue(calls, 1, "The value of `calls` is `1`");
var Base = function() {}.bind();
Object.defineProperty(Base, 'prototype', {
  set: function() {
    $ERROR("Cannot create a setter property named `prototype`");
  }
});
assert.throws(TypeError, function() {
  class C extends Base {}
});
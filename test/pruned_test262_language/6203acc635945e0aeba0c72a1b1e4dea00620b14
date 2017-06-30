assert.throws(TypeError, function() {
  class C extends 42 {}
});
assert.throws(TypeError, function() {
  // Function but its .prototype is not null or a function.
  class C extends Math.abs {}
});
assert.throws(TypeError, function() {
  Math.abs.prototype = 42;
  class C extends Math.abs {}
});
delete Math.abs.prototype;
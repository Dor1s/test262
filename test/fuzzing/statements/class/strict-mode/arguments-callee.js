var D = class extends function() {
  arguments.callee;
} {};
assert.throws(TypeError, function() {
  Object.getPrototypeOf(D).arguments;
});
assert.throws(TypeError, function() {
  new D;
});
Object.defineProperty(Function.prototype, "prototype", {
  get: function() {
    $ERROR("getter for 'prototype' called");
  }
});
var result = 0 instanceof Function.prototype;
assert.sameValue(result, false);
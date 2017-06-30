var global = this;
  // NaN (15.1.1.1) has [[Configurable]] set to false.
assert.throws(TypeError, function() {
    delete global.NaN;
});
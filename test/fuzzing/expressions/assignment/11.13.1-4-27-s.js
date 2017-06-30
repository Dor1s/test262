var global = this;
assert.throws(TypeError, function() {
      global.undefined = 42;
});
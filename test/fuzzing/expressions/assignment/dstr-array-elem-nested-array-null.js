var _;
assert.throws(TypeError, function() {
  0, [[ _ ]] = [null];
});
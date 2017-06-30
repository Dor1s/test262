  // NaN (15.1.1.1) has [[Configurable]] set to false.
  var d = delete NaN;
assert.sameValue(d, false, 'd');
assert.throws(TypeError, function() {
  for (var {} of [undefined]) {
    return;
  }
});
assert.throws(TypeError, function() {
  for (var {} = null; iterCount < 1; ) {
    return;
  }
});
assert.throws(TypeError, function() {
  for (var {} = undefined; iterCount < 1; ) {
    return;
  }
});
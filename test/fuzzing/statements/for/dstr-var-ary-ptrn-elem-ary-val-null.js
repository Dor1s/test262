assert.throws(TypeError, function() {
  for (var [[x]] = [null]; iterCount < 1; ) {
    return;
  }
});
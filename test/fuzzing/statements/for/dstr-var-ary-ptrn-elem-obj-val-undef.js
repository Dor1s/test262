assert.throws(TypeError, function() {
  for (var [{ x }] = []; iterCount < 1; ) {
    return;
  }
});
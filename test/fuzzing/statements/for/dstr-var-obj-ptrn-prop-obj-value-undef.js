assert.throws(TypeError, function() {
  for (var { w: { x, y, z } = undefined } = { }; iterCount < 1; ) {
    return;
  }
});
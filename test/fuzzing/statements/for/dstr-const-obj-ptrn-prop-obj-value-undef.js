assert.throws(TypeError, function() {
  for (const { w: { x, y, z } = undefined } = { }; ; ) {
    return;
  }
});
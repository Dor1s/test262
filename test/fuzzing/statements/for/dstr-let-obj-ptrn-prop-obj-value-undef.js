assert.throws(TypeError, function() {
  for (let { w: { x, y, z } = undefined } = { }; ; ) {
    return;
  }
});
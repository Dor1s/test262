assert.throws(TypeError, function() {
  for (var { w: { x, y, z } = undefined } of [{ }]) {
    return;
  }
});
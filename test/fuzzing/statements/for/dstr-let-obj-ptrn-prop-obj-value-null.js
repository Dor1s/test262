assert.throws(TypeError, function() {
  for (let { w: { x, y, z } = { x: 4, y: 5, z: 6 } } = { w: null }; ; ) {
    return;
  }
});
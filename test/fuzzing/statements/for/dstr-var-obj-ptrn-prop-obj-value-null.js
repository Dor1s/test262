assert.throws(TypeError, function() {
  for (var { w: { x, y, z } = { x: 4, y: 5, z: 6 } } = { w: null }; iterCount < 1; ) {
    return;
  }
});
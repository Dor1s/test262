assert.throws(TypeError, function() {
  for (var { w: [x, y, z] = [4, 5, 6] } = { w: null }; iterCount < 1; ) {
    return;
  }
});
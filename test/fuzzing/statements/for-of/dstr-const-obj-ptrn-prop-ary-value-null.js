assert.throws(TypeError, function() {
  for (const { w: [x, y, z] = [4, 5, 6] } of [{ w: null }]) {
    return;
  }
});
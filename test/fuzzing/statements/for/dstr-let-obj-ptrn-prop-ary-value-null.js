assert.throws(TypeError, function() {
  for (let { w: [x, y, z] = [4, 5, 6] } = { w: null }; ; ) {
    return;
  }
});
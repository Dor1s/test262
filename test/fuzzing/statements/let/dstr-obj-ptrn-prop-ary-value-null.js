assert.throws(TypeError, function() {
  let { w: [x, y, z] = [4, 5, 6] } = { w: null };
});
assert.throws(TypeError, function() {
  let { w: { x, y, z } = undefined } = { };
});
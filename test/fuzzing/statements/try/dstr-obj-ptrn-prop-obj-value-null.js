assert.throws(TypeError, function() {
  try {
    throw { w: null };
  } catch ({ w: { x, y, z } = { x: 4, y: 5, z: 6 } }) {}
});
assert.throws(TypeError, function() {
  try {
    throw { };
  } catch ({ w: { x, y, z } = undefined }) {}
});
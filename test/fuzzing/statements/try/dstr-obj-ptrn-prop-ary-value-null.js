assert.throws(TypeError, function() {
  try {
    throw { w: null };
  } catch ({ w: [x, y, z] = [4, 5, 6] }) {}
});
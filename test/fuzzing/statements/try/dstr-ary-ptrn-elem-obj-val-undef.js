assert.throws(TypeError, function() {
  try {
    throw [];
  } catch ([{ x }]) {}
});
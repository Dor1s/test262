assert.throws(TypeError, function() {
  try {
    throw undefined;
  } catch ({}) {}
});
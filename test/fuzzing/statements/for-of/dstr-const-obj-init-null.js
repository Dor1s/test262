assert.throws(TypeError, function() {
  for (const {} of [null]) {
    return;
  }
});
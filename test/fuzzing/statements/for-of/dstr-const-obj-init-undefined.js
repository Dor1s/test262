assert.throws(TypeError, function() {
  for (const {} of [undefined]) {
    return;
  }
});
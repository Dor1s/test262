assert.throws(TypeError, function() {
  for (const {} = null; ; ) {
    return;
  }
});
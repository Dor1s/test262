assert.throws(TypeError, function() {
  for (const {} = undefined; ; ) {
    return;
  }
});
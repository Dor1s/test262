assert.throws(TypeError, function() {
  for (const [{ x }] = []; ; ) {
    return;
  }
});
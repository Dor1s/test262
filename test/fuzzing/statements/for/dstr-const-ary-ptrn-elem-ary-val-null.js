assert.throws(TypeError, function() {
  for (const [[x]] = [null]; ; ) {
    return;
  }
});
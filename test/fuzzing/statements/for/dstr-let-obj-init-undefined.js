assert.throws(TypeError, function() {
  for (let {} = undefined; ; ) {
    return;
  }
});
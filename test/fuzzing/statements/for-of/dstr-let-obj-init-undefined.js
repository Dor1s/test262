assert.throws(TypeError, function() {
  for (let {} of [undefined]) {
    return;
  }
});
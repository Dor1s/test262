assert.throws(TypeError, function() {
  const [[x]] = [null];
});
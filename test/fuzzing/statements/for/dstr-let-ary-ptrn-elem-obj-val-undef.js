assert.throws(TypeError, function() {
  for (let [{ x }] = []; ; ) {
    return;
  }
});
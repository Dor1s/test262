assert.throws(TypeError, function() {
  for (let [[x]] = [null]; ; ) {
    return;
  }
});
assert.throws(TypeError, function() {
  let [[x]] = [null];
});
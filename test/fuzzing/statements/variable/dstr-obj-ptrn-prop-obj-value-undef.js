assert.throws(TypeError, function() {
  var { w: { x, y, z } = undefined } = { };
});
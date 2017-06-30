var f = function({ w: { x, y, z } = undefined } = { }) {};
assert.throws(TypeError, function() {
  f();
});
var C = class {
  *method({ w: { x, y, z } = undefined } = { }) {}
};
var c = new C();
assert.throws(TypeError, function() {
  c.method();
});
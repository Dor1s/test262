class C {
  static *method({ w: { x, y, z } = undefined } = { }) {}
};
assert.throws(TypeError, function() {
  C.method();
});
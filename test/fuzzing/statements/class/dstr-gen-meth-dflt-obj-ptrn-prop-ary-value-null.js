class C {
  *method({ w: [x, y, z] = [4, 5, 6] } = { w: null }) {}
};
var c = new C();
assert.throws(TypeError, function() {
  c.method();
});
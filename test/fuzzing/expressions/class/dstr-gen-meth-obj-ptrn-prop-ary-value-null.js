var C = class {
  *method({ w: [x, y, z] = [4, 5, 6] }) {}
};
var c = new C();
assert.throws(TypeError, function() {
  c.method({ w: null });
});
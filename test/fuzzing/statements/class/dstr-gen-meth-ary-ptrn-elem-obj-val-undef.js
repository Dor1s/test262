class C {
  *method([{ x }]) {}
};
var c = new C();
assert.throws(TypeError, function() {
  c.method([]);
});
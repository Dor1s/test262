class C {
  *method({} = null) {}
};
var c = new C();
assert.throws(TypeError, function() {
  c.method();
});
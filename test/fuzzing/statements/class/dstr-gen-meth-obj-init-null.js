class C {
  *method({}) {}
};
var c = new C();
assert.throws(TypeError, function() {
  c.method(null);
});
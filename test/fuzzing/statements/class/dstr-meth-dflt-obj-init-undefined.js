class C {
  method({} = undefined) {}
};
var c = new C();
assert.throws(TypeError, function() {
  c.method();
});
class C {
  method([[x]] = [null]) {}
};
var c = new C();
assert.throws(TypeError, function() {
  c.method();
});
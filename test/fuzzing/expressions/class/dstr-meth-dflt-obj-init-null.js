var C = class {
  method({} = null) {}
};
var c = new C();
assert.throws(TypeError, function() {
  c.method();
});
var C = class {
  *method({} = undefined) {}
};
var c = new C();
assert.throws(TypeError, function() {
  c.method();
});
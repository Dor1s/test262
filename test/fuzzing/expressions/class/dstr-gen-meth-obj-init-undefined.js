var C = class {
  *method({}) {}
};
var c = new C();
assert.throws(TypeError, function() {
  c.method(undefined);
});
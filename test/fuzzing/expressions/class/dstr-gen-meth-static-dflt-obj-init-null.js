var C = class {
  static *method({} = null) {}
};
assert.throws(TypeError, function() {
  C.method();
});
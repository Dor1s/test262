var C = class {
  static *method({}) {}
};
assert.throws(TypeError, function() {
  C.method(undefined);
});
var C = class {
  static *method([{ x }]) {}
};
assert.throws(TypeError, function() {
  C.method([]);
});
class C {
  static *method([{ x }]) {}
};
assert.throws(TypeError, function() {
  C.method([null]);
});
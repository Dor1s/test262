class C {
  static *method([{ x }] = [null]) {}
};
assert.throws(TypeError, function() {
  C.method();
});
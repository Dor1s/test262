class C {
  static method({} = null) {}
};
assert.throws(TypeError, function() {
  C.method();
});
class C {
  static method({} = undefined) {}
};
assert.throws(TypeError, function() {
  C.method();
});
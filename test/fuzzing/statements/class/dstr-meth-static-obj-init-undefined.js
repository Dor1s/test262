class C {
  static method({}) {}
};
assert.throws(TypeError, function() {
  C.method(undefined);
});
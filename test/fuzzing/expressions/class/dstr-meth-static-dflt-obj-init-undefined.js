var C = class {
  static method({} = undefined) {}
};
assert.throws(TypeError, function() {
  C.method();
});
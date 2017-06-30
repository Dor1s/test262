var C = class {
  static method([{ x }] = [null]) {}
};
assert.throws(TypeError, function() {
  C.method();
});
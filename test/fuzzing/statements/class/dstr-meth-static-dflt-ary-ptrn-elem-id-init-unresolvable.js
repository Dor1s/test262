class C {
  static method([ x = unresolvableReference ] = []) {}
};
assert.throws(ReferenceError, function() {
  C.method();
});
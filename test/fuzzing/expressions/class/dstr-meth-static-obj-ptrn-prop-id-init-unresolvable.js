var C = class {
  static method({ x: y = unresolvableReference }) {}
};
assert.throws(ReferenceError, function() {
  C.method({});
});
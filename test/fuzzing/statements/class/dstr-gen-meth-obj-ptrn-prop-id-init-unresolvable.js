class C {
  *method({ x: y = unresolvableReference }) {}
};
var c = new C();
assert.throws(ReferenceError, function() {
  c.method({});
});
var C = class {
  *method([ x = unresolvableReference ] = []) {}
};
var c = new C();
assert.throws(ReferenceError, function() {
  c.method();
});
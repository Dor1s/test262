var obj = {
  *method([ x = unresolvableReference ]) {}
};
assert.throws(ReferenceError, function() {
  obj.method([]);
});
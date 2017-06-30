var f;
f = async function* h({ x: y = unresolvableReference } = {}) {
  
};
assert.throws(ReferenceError, function() {
  f();
});
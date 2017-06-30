var f = async function*({ x: y = unresolvableReference } = {}) {
  
};
assert.throws(ReferenceError, function() {
  f();
});
var f;
f = async function* g([ x = unresolvableReference ]) {
  
};
assert.throws(ReferenceError, function() {
  f([]);
});
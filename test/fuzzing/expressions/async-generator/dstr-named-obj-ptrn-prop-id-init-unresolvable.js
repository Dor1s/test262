var f;
f = async function* g({ x: y = unresolvableReference }) {
  
};
assert.throws(ReferenceError, function() {
  f({});
});
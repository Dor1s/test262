var f;
f = async function* h([ x = unresolvableReference ] = []) {
  
};
assert.throws(ReferenceError, function() {
  f();
});
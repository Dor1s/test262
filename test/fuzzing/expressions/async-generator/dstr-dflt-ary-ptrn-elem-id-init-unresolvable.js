var f = async function*([ x = unresolvableReference ] = []) {
  
};
assert.throws(ReferenceError, function() {
  f();
});
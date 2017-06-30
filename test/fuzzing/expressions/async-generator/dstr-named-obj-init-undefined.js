var f;
f = async function* g({}) {
  
};
assert.throws(TypeError, function() {
  f(undefined);
});
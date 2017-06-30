var f;
f = async function* h([{ x }] = []) {
  
};
assert.throws(TypeError, function() {
  f();
});
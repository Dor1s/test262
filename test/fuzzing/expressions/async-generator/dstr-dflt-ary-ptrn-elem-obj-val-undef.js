var f = async function*([{ x }] = []) {
  
};
assert.throws(TypeError, function() {
  f();
});
var f;
f = async function* g({ w: [x, y, z] = [4, 5, 6] }) {
  
};
assert.throws(TypeError, function() {
  f({ w: null });
});
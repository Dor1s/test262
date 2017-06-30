var f;
f = async function* g({ w: { x, y, z } = undefined }) {
  
};
assert.throws(TypeError, function() {
  f({ });
});
async function* f({ w: { x, y, z } = undefined }) {
  
};
assert.throws(TypeError, function() {
  f({ });
});
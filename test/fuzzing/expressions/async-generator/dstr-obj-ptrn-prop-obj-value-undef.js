var f;
f = async function*({ w: { x, y, z } = undefined }) {
  
};
assert.throws(TypeError, function() {
  f({ });
});
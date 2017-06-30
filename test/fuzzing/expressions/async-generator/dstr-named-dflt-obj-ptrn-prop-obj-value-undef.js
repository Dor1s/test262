var f;
f = async function* h({ w: { x, y, z } = undefined } = { }) {
  
};
assert.throws(TypeError, function() {
  f();
});
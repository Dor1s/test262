var f;
f = async function*([[x]]) {
  
};
assert.throws(TypeError, function() {
  f([null]);
});
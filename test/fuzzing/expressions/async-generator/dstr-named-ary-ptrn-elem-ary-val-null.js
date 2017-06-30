var f;
f = async function* g([[x]]) {
  
};
assert.throws(TypeError, function() {
  f([null]);
});
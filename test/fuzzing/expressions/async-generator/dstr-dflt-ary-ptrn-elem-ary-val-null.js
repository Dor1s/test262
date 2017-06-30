var f = async function*([[x]] = [null]) {
  
};
assert.throws(TypeError, function() {
  f();
});
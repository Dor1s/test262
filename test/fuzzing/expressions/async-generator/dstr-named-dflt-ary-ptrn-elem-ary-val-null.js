var f;
f = async function* h([[x]] = [null]) {
  
};
assert.throws(TypeError, function() {
  f();
});
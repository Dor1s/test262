var f;
f = async function*({}) {
  
};
assert.throws(TypeError, function() {
  f(null);
});